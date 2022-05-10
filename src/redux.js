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

export const { getToken } = TokenSlice.actions;
export const store = configureStore({
  reducer: {
    token: TokenSlice.reducer,
  },
});

// import { getToken, SendIdentifiersAndGetToken } from "../redux";

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(identifiers),
// };

// async function SendIdentifiers() {
//   await fetch("http://localhost:3001/api/v1/user/login", options).then((res) =>
//     res.json().then((res) => {
//       if (res.status === 200) {
//         dispatch(getToken(res.body.token));
//         navigate("/user");
//       } else {
//         alert(res.message);
//       }
//     })
//   );
// }
