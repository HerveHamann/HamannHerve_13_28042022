import { configureStore, createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
  name: "token",

  initialState: { token: "" },

  reducers: {
    getToken: (state, action) => {
      const newToken = action.payload;
      state.token = newToken;
    },
  },
});

export const { getToken, SendIdentifiersAndGetToken } = TokenSlice.actions;
export const store = configureStore({
  reducer: {
    token: TokenSlice.reducer,
  },
});
