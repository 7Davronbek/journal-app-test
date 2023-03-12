import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const journal = "journal";

// GET ALL JOURNALS
const getJournals = createAsyncThunk(`${journal}/getAllJournals`, async () => {
  const { data } = await axios.get("/journals");
  return data;
});

const initialState = {
  journals: null,
  isJournals: false,
};

export const journalSlice = createSlice({
  name: journal,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJournals.pending, (state) => {
      state.isJournals = true;
    }),
      builder.addCase(getJournals.fulfilled, (state, action) => {
        state.isJournals = false;
        console.log(action);
      }),
      builder.addCase(getJournals.rejected, (state) => {
        state.isJournals = false;
      });
  },
});

export const journalAction = {
  ...journalSlice.actions,
  getJournals,
};

export default journalSlice.reducer;
