import { configureStore } from "@reduxjs/toolkit";
import chainsSlice from "./features/chains/chains.slice";
import tokensSlice from "./features/tokens/tokens.slice";

export const store = configureStore({
  reducer: {
    chains: chainsSlice,
    tokens: tokensSlice,
  },
});


