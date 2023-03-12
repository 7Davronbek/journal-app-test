import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { CONFIG } from "../utils/axios";
import { toast } from "react-toastify";

const journal = "journal";

// GET ALL JOURNALS
const getJournals = createAsyncThunk(`${journal}/getAllJournals`, async () => {
  const { data } = await axios.get("/journals");
  return data;
});

// CREATE JOURNAL
const createJournal = createAsyncThunk(
  `${journal}/createJournal`,
  async ({ formData, navigate }) => {
    const { data } = await axios.post(
      "/user/journal_create/",
      formData,
      CONFIG
    );
    if (data) {
      navigate("/journals");
      return data;
    }
  }
);

// DELETE JOURNAL
const deleteJournal = createAsyncThunk(
  `${journal}/deleteJournal`,
  async (id) => {
    const { data } = await axios.delete(`/user/journal_delete/${id}`, CONFIG);
    return data;
  }
);

const initialState = {
  journals: null,
  isJournals: false,

  isCreateJournals: false,

  isDeleteJournal: false,
};

export const journalSlice = createSlice({
  name: journal,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL JOURNALS
    builder.addCase(getJournals.pending, (state) => {
      state.isJournals = true;
    }),
      builder.addCase(getJournals.fulfilled, (state, action) => {
        state.isJournals = false;
        state.journals = action.payload.results;
      }),
      builder.addCase(getJournals.rejected, (state) => {
        state.isJournals = false;
      }),
      //   CREATE JOURNAL
      builder.addCase(createJournal.pending, (state) => {
        state.isCreateJournals = true;
      }),
      builder.addCase(createJournal.fulfilled, (state, action) => {
        state.isCreateJournals = false;
        toast.success("Journal created successfully.");
      }),
      builder.addCase(createJournal.rejected, (state) => {
        state.isCreateJournals = false;
        toast.error("Something went wrong. Please try again.");
      }),
      // DELETE JOURNAL
      builder.addCase(deleteJournal.pending, (state) => {
        state.isDeleteJournal = true;
      }),
      builder.addCase(deleteJournal.fulfilled, (state, action) => {
        state.isDeleteJournal = false;
        toast.success("Journal deleted successfully.");
      }),
      builder.addCase(deleteJournal.rejected, (state) => {
        state.isDeleteJournal = false;
        toast.error("Something went wrong. Please try again.");
      });
  },
});

export const journalAction = {
  ...journalSlice.actions,
  getJournals,
  createJournal,
  deleteJournal,
};

export default journalSlice.reducer;
