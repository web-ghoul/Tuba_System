import axios from "axios";
import Cookies from "js-cookie";

const useAxios = () => {
  const server = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
  });

  // Add a request interceptor
  server.interceptors.request.use(
    (config) => {
      const token = Cookies.get(import.meta.env.VITE_TOKEN_TITLE);
      if (token) {
        config.headers.Authorization = `token ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return { server };
};

export default useAxios;
