import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { toast } from "react-toastify";

const auth = "auth";

const login = createAsyncThunk(`${auth}/login`, async (login, password) => {
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
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      (state.isLoading = false), console.log(action);
    },
    [login.rejected]: (state) => {
      (state.isLoading = false), toast.error("Bad Request.");
    },
  },
});

export const authAction = {
  ...authSlice.actions,
  login,
};

export default authSlice.reducer;
