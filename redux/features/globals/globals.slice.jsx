import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  showTokensModal: false,
  showRoutesModal: false,
  showSelectedRouteInfo: false,
};

const globals = createSlice({
  name: "globals",
  initialState,

  reducers: {
    setShowTokensModal: (state) => {
      state.showTokensModal = !state.showTokensModal;
    },

    setShowRoutesModal: (state) => {
      state.showRoutesModal = !state.showRoutesModal;
    },

    setShowSelectedRouteInfo: (state) => {
      state.showSelectedRouteInfo = !state.showSelectedRouteInfo;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export default globals.reducer;
export const {
  setShowRoutesModal,
  setShowTokensModal,
  setShowSelectedRouteInfo,
  setAddress,
} = globals.actions;
