// Omporting AutoObservable
import { makeAutoObservable } from "mobx";

// Importing jwt decode
import decode from "jwt-decode";

// Importing axios
import axios from "axios";

// Importing AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

let instance = axios.create({
  baseURL: "http://192.168.8.107:8000/",
});

class AuthStore {
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
    this.user = decode(token);
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
      const res = await instance.post("/users/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/users/signin", userData);
      this.setUser(res.data.token);
      alert("u r signed in");
    } catch (error) {
      alert("u r NOT signed in");
      // console.error(error);
    }
  };
}

const authStore = new AuthStore();
// authStore.signout();
authStore.checkForToken();

export default authStore;
