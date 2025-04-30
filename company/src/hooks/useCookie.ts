import Cookies from "js-cookie";

const useCookie = () => {
  const handleSetCookie = (key: string, value: string) => {
    Cookies.set(key, value);
  };

  const handleGetCookie = (key: string) => {
    return Cookies.get(key);
  };

  return { handleSetCookie,handleGetCookie };
};

export default useCookie;