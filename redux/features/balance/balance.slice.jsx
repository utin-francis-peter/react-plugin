import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  sourceTokenBal: "",
  destinationTokenBal: "",
  error: "",
};

export const getSourceTokenBal = createAsyncThunk(
  "tokens/sourceTokenBal",
  async ({ sourceTokenAddress, sourceChainId, userAddress }) => {
    const res = await fetch(
      `https://api.socket.tech/v2/balances/token-balance?tokenAddress=${sourceTokenAddress}&chainId=${sourceChainId}&userAddress=${userAddress}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return res.json();
  }
);

export const getDestinationTokenBal = createAsyncThunk(
  "tokens/destinationTokenBal",
  async (payload) => {
    const res = await fetch(
      `https://api.socket.tech/v2/balances/token-balance?tokenAddress=${payload.destTokenAddress}&chainId=${payload.destChainId}&userAddress=${payload.userAddress}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return res.json();
  }
);

const balanceSlice = createSlice({
  name: "balance",
  initialState,

  extraReducers: (builder) => {
    //   source token bal cases
    builder.addCase(getSourceTokenBal.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getSourceTokenBal.fulfilled, (state, action) => {
      state.loading = false;
      state.sourceTokenBal = action.payload.result.balance;
      console.log(state.sourceTokenBal);
    });

    builder.addCase(getSourceTokenBal.rejected, (state, action) => {
      state.loading = false;
      state.sourceTokenBal = "";
      state.error = action.error.message;
    });

    //   destination token bal cases
    builder.addCase(getDestinationTokenBal.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getDestinationTokenBal.fulfilled, (state, action) => {
      state.loading = false;
      state.destinationTokenBal = action.payload.result.balance;
    });

    builder.addCase(getDestinationTokenBal.rejected, (state, action) => {
      state.loading = false;
      state.sourceTokenBal = "";
      state.error = action.error.message;
    });
  },
});

export default balanceSlice.reducer;
