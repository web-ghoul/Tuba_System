import axios from "axios";

const useAxios = () => {
  const server = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
    headers: {
      Referer: "https://cp-staging.gettuba.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin", // Set the Referrer-Policy header
    },
  });
  return { server };
};

export default useAxios;
