import { configureStore } from "@reduxjs/toolkit";
import { localitySlice } from "./localitySlice";

export const reduxStore = configureStore({
  reducer: {
    locality: localitySlice.reducer,
  },
});
