import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slice";

export const store = configureStore({
  reducer: {
    counter: studentSlice,
  },
});
