import { configureStore } from "@reduxjs/toolkit";
import chainsSlice from "./features/chains/chains.slice";
import tokensSlice from "./features/tokens/tokens.slice";
import quoteSlice from "./features/quote/quote.slice";
import balanceSlice from "./features/balance/balance.slice";
import globalsSlice from "./features/globals/globals.slice";

export const store = configureStore({
  reducer: {
    globals: globalsSlice,
    chains: chainsSlice,
    tokens: tokensSlice,
    quote: quoteSlice,
    balance: balanceSlice,
  },
});
