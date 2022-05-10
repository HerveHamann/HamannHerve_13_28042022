import { configureStore } from "@reduxjs/toolkit";

import getTokenReducer from "../features/getToken";

export default configureStore({
  reducer: {
    token: getTokenReducer,
  },
});
