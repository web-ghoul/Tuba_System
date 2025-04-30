import axios from "axios";
import Cookies from "js-cookie";

const useAxios = () => {
  const token = Cookies.get(import.meta.env.VITE_TOKEN_TITLE);
  console.log("Auth token:", token);
  

  const server = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
      Referer: "https://cp-staging.gettuba.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      ...(token && { Authorization: `token ${token}` }), // Conditionally add token
    },
  });

  return { server };
};

export default useAxios;
