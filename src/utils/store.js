import { configureStore } from "@reduxjs/toolkit";

import getTokenReducer from "../features/getToken";
import getUserReducer from "../features/getUser";

export default configureStore({
  reducer: {
    token: getTokenReducer,
    user: getUserReducer,
  },
});
