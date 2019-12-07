import { createReducer } from "@reduxjs/toolkit";
import { authenticateUser } from "../actions/userAuth";

export const authedUser = createReducer({},{
  [authenticateUser]: (state, action) => action.payload
});
