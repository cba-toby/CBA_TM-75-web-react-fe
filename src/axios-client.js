import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      console.log("Error 401");
      // localStorage.removeItem("ACCESS_TOKEN");
    }

    throw error;
  }
);

export default axiosClient;
