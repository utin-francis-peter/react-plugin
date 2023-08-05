import { configureStore } from "@reduxjs/toolkit";
import chainsSlice from "./features/chains/chains.slice";

export const store = configureStore({
  reducer: {
    chains: chainsSlice,
  },
});
