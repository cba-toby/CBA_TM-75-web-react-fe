import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  try {
      localStorage.removeItem('ACCESS_TOKEN');

    if (error.response.status  == 401) {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  } catch(e) {
    console.error(e);
  }

  throw error;
})

export default axiosClient;