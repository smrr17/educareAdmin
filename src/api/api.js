import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://c9c0e91debef49.lhr.life/api/user",
});
instance.interceptors.request.use(
  async (config) => {
    const token = await window.localStorage.getItem("token");

    console.log(typeof token);
    if (token) {
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log("hjfjkfi", config);
    return config;
  },
  (e) => {
    // console.log("hjfjkfi");
    Promise.reject(e);
  }
);

export default instance;
