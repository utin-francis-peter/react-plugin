import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  network: {
    allNetwork: [],
    activeNetwork: {},
  },
  token: {
    allToken: [],
    activeToken: {},
  },
  loading: false,
};

// handler functions
const uri = `https://api.socket.tech/v2/`;

const networkTokenSlice = createSlice({
  name: "network-token-slice",
  initialState,
  reducers: {},
});

export const {} = networkTokenSlice.actions;

export default networkTokenSlice.reducer;
