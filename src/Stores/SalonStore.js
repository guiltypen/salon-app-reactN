import axios from "axios";
import { makeObservable, observable, action } from "mobx";

let instance = axios.create({
  baseURL: "http://192.168.8.107:8000/",
});

class SalonStore {
  salon = null;
  loading = true;

  constructor() {
    makeObservable(this, {
      salon: observable,
      loading: observable,
      fetchSalon: action,
    });
  }

  fetchSalon = async () => {
    try {
      const response = await instance.get("http://localhost:8000/salons");
      this.salon = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const salonStore = new SalonStore();
salonStore.fetchSalon();

export default SalonStore;
