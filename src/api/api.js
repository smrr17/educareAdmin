import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://dc30-110-93-227-52.in.ngrok.io",
});
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    if (token) {
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => {
    console.log("hjfjkfi");
    Promise.reject(e);
  }
);

export default instance;
