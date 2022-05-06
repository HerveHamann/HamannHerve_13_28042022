import { configureStore, createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
  name: "token",
  // initstate = object vu qu'on reçoit un obj?
  initialState: { token: " " },
  reducers: {
    getToken: (state, action) => {
      const newToken = action.payload;
      state.token = newToken;
    },
    throwToken: () => {},
  },
});

export const { getToken } = TokenSlice.actions;
export const store = configureStore({
  reducer: {
    token: TokenSlice.reducer,
  },
});
