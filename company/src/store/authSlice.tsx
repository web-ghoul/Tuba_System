import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthValuesTypes } from "../types/store.types";

const initialState: AuthValuesTypes = {
  token: null,
  user: null,
  company: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.userData;
      state.company = action.payload.company;
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 2 * 60 * 60 * 1000);
      Cookies.set(
        `${import.meta.env.VITE_TOKEN_COOKIE}`,
        action.payload.token,
        {
          expires: expirationDate,
        }
      );
      localStorage.setItem(
        `${import.meta.env.VITE_USER_DATA_STORAGE}`,
        JSON.stringify(action.payload.userData)
      );
      Cookies.set(
        `${import.meta.env.VITE_COMPANY_ID_COOKIE}`,
        action.payload.company,
        { expires: expirationDate }
      );
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      Cookies.remove(`${import.meta.env.VITE_TOKEN_COOKIE}`);
      Cookies.remove(`${import.meta.env.VITE_COMPANY_ID_COOKIE}`);
      localStorage.removeItem(`${import.meta.env.VITE_USER_DATA_STORAGE}`);
    },
    setAuth: (state, action) => {
      if (action.payload) {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.company = action.payload.company;
      }
    },
  },
});

export const { login, setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
