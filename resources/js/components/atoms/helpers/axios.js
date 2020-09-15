import axios from "axios";
import Cookies from "js-cookie";

let axiosInstance = axios.create({
    baseURL: `https://localhost:5001`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access_token");

        if (token) {
            config.headers.common["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios = axiosInstance;
