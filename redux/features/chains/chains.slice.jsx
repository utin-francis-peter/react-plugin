import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  loading: false,
  chainsList: [],
  error: "",
};

// defining the async action
export const getChains = createAsyncThunk("chains/getChains", async () => {
  const response = await fetch("https://api.socket.tech/v2/supported/chains", {
    headers: {
      accept: "application/json",
      "API-KEY": "645b2c8c-5825-4930-baf3-d9b997fcd88c",
    },
  });
  return response.json();
});

const chainsSlice = createSlice({
  name: "chains",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getChains.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getChains.fulfilled, (state, action) => {
      state.loading = false;
      state.chainsList = action.payload;
    });

    builder.addCase(getChains.rejected, (state, action) => {
      state.loading = false;
      state.chainsList = [];
      state.error = action.error.message;
    });
  },
});

export default chainsSlice.reducer;
