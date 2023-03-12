import { configureStore } from "@reduxjs/toolkit";
import { authSlice, journalSlice } from ".";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    journal: journalSlice,
  },
});
