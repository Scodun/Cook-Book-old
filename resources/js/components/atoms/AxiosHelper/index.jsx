import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }
    // eslint-disable-next-line no-undef,camelcase
    config.headers.common["X-CSRF-TOKEN"] = csrf_token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios = axiosInstance;
