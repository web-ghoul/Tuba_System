import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthValuesTypes } from "../types/store.types";

export const getProfile = createAsyncThunk("/auth/getProfile", async () => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_STORAGE}`);
  const userId = Cookies.get(`${import.meta.env.VITE_USER_ID_STORAGE}`);
  const res = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
});

const initialState: AuthValuesTypes = {
  token: null,
  userId: null,
  user: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 2 * 60 * 60 * 1000);
      Cookies.set(
        `${import.meta.env.VITE_TOKEN_STORAGE}`,
        action.payload.token,
        {
          expires: expirationDate,
        }
      );
      Cookies.set(
        `${import.meta.env.VITE_USER_ID_STORAGE}`,
        action.payload.userId,
        { expires: expirationDate }
      );
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
      Cookies.remove(`${import.meta.env.VITE_TOKEN_STORAGE}`);
      Cookies.remove(`${import.meta.env.VITE_USER_ID_STORAGE}`);
    },
    setAuth: (state, action) => {
      if (action.payload) {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
    });
    builder.addCase(getProfile.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { login, setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
