import { selectUser } from "../utils/selectors";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

export function fetchOrUpdateUser(token) {
  return async (dispatch, getState) => {
    const status = selectUser(getState()).status;

    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetching());
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token.data?.body.token,
        },
      });
      const data = await response.json();
      dispatch(actions.resoldved(data));
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === "void") {
        draft.status = "pending";
        return;
      }
      if (draft.status === "rejected") {
        draft.error = null;
        draft.status = "pending";
        return;
      }
      if (draft.status === "resolved") {
        draft.status = "updating";
        return;
      }
      return;
    },
    resoldved: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.data = action.payload;
        draft.status = "resolved";
        return;
      }
      return;
    },
    rejected: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.status = "rejected";
        draft.error = action.payload;
        draft.data = null;
        return;
      }
      return;
    },
  },
});

export default reducer;
