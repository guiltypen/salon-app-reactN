import axios from "axios";
import { makeObservable, observable, action } from "mobx";

let instance = axios.create({
  baseURL: "http://192.168.8.107:8000/",
});

class UserStore {
  user = null;
  loading = true;

  constructor() {
    makeObservable(this, {
      user: observable,
      loading: observable,
      fetchUser: action,
      updateUser: action,
    });
  }

  fetchUser = async () => {
    try {
      const response = await instance.get("http://localhost:8000/users");
      this.user = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  updateUser = async (updateUser) => {
    try {
      await instance.put(
        `http://localhost:8000/users/${updateUser.id}`,
        updateUser
      );
      const user = this.user.find((user) => user.id === updateUser.id);
      for (const key in user) user[key] = updateUser[key];
    } catch (error) {
      console.log(error);
    }
  };
}

const userStore = new UserStore();
userStore.fetchUser();

export default UserStore;
