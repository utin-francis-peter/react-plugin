import { configureStore } from "@reduxjs/toolkit";
import networkSlice from "./networkSlice";

export const store = configureStore({
  reducer: {
    networkSlice: networkSlice,
  },
});
