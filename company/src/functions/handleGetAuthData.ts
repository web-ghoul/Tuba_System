import Cookies from "js-cookie";
import { UserTypes } from "../types/store.types";

export const handleGetAuthData = (): {
  token: string | null;
  userData: UserTypes | null;
  company: string | null;
} => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`) || null;
  const company =
    Cookies.get(`${import.meta.env.VITE_COMPANY_ID_COOKIE}`) || null;
  const userData = localStorage.getItem(`${import.meta.env.VITE_USER_DATA_STORAGE}`);
  return {
    token,
    company,
    userData: userData ? JSON.parse(userData) : null,
  };
};
