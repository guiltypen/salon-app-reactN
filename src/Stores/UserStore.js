import { makeAutoObservable, runInAction } from "mobx";
import decode from "jwt-decode";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

let instance = axios.create({
  baseURL: "http://localhost:8000/",
});

class UserStore {
  user = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("User Token");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };

  setUser = async (token) => {
    // Keep user logged in
    await AsyncStorage.setItem("User Token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    runInAction(() => {
      this.user = decode(token);
    });
    console.log(" user from store :", this.user);
    this.loading = false;
  };

  signout = async () => {
    try {
      await AsyncStorage.removeItem("User Token");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (userData) => {
    try {
      console.log("useData from store:", userData);
      const res = await instance.post("/users/signup", userData);

      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData) => {
    try {
      console.log("user from store:", userData);
      const res = await instance.post("/users/signin", userData);
      this.setUser(res.data.token);
      // alert("u r signed in");
    } catch (error) {
      // alert("u r NOT signed in");
      console.error(error);
    }
  };

  updateUser = async (updateUser) => {
    try {
      // change this and chack backend with salwa
      console.log(updateUser.id);
      await instance.put(`users/${updateUser.id}`, updateUser);
      // const user = this.user.find((user) => user.id === updateUser.id);
      // for (const key in user) user[key] = updateUser[key];
    } catch (error) {
      console.log(error);
    }
  };
}

const userStore = new UserStore();
userStore.signout();
userStore.checkForToken();

export default userStore;
