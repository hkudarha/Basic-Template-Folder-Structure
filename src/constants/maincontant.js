import axios from "axios";
// import logo from "../assets/logo.png";

export const MainContent = {
  appName: "Harshita Kudarha ",
  // logo: logo,
  appURL: "",
  contactNo: "+91 8962813397",
  email: "hkudarha@gmail.com",
  address:
    " Noida Sector 62, SO Gautam Buddha Nagar, Uttar Pradesh, India - 201309",
  telegram_link: "https://t.me/YourTelegramUsername",
};
export const backendConfig = {
  base: "https://api.darbarcollection.com/api",
  origin: "https://api.darbarcollection.com",

  //   base: "http://192.168.1.11:6067/api",
  // origin: "http://192.168.1.11:6067",
};

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
});
Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
