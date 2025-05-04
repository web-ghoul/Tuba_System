import axios from "axios";
import { handleGetAuthData } from "../functions/handleGetAuthData";

const useAxios = (unauthorized: boolean = false) => {
  const { token } = handleGetAuthData();
  const server = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
    headers: {
      ...(unauthorized ? {} : { Authorization: `token ${token}` }),
    },
  });
  return { server };
};

export default useAxios;
