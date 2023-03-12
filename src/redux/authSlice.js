import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { TOKEN } from "../constants";

const auth = "auth";

const login = createAsyncThunk(
  `${auth}/login`,
  async ({ email, password, navigate }) => {
    const { data } = await axios.post("/auth/login/", { email, password });
    if (data) {
      navigate("/journals");
      return data;
    }
  }
);

const initialState = {
  isLoading: false,
  token: localStorage.getItem(TOKEN) ? localStorage.getItem(TOKEN) : null,
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
        state.token = action.payload.token;
        localStorage.setItem(TOKEN, state.token);
        toast.success("Welcome " + action.payload.user_type);
      }),
      builder.addCase(login.rejected, (state) => {
        state.isLoading = false;
        toast.error("Siz ro'yxatdan o'tmagansiz, Iltimos ro'yxatdan o'ting!!!");
      });
  },
});

export const authAction = {
  ...authSlice.actions,
  login,
};

export default authSlice.reducer;
