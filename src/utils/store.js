import { configureStore } from "@reduxjs/toolkit";

import getTokenReducer from "../features/getToken";
import getUserReducer from "../features/getUser";
import sendUserNameReducer from "../features/sendUser";

export default configureStore({
  reducer: {
    token: getTokenReducer,
    user: getUserReducer,
    editedNames: sendUserNameReducer,
  },
});
