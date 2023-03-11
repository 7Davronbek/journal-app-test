import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { toast } from "react-toastify";

const auth = "auth";

const login = createAsyncThunk(`${auth}/login`, async ({ login, password }) => {
  const { data } = await axios.post("/auth/login/", { login, password });
  return data;
});

const initialState = {
  isLoading: false,
  token: null,
};

export const authSlice = createSlice({
  name: auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
      }),
      builder.addCase(login.rejected, (state) => {
        state.isLoading = false;
        toast.error("Siz ro'yxatdan o'tmagansiz, Iltimos ro'yxatdan o'ting!!!");
      });
  },
  //   extraReducers: {
  //     [login.pending]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [login.fulfilled]: (state, action) => {
  //       (state.isLoading = false), console.log(action);
  //     },
  //     [login.rejected]: (state) => {
  //       state.isLoading = false;
  //       toast.error("Siz ro'yxatdan o'tmagansiz, Iltimos ro'yxatdan o'ting!!!");
  //     },
  //   },
});

export const authAction = {
  ...authSlice.actions,
  login,
};

export default authSlice.reducer;
