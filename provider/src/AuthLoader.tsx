// src/AuthLoader.tsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setAuth, getProfile } from "./store/authSlice";
import { AppDispatch } from "./store/store";

const AuthLoader = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = Cookies.get(import.meta.env.VITE_TOKEN_TITLE!);
    const userId = Cookies.get(import.meta.env.VITE_USER_ID_TITLE!);

    if (token && userId) {
      dispatch(setAuth({ token, userId }));
      dispatch(getProfile());
    }
  }, []);

  return <>{children}</>;
};

export default AuthLoader;
