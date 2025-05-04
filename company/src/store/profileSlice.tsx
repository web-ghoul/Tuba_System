import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileValuesTypes } from "../types/store.types";
import useAxios from "../hooks/useAxios";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (companyId: string) => {
    const { server } = useAxios();
    const res = await server.get(`document/TB Company/${companyId}`);
    return res.data.data;
  }
);

const initialState: ProfileValuesTypes = {
  profile: undefined,
  loading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.loading = false;
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default profileSlice.reducer;
