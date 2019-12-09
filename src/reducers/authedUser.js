import { createReducer } from "@reduxjs/toolkit";
import { authenticateUser } from "../actions/authedUser";

export const authedUser = createReducer(null,{
  [authenticateUser]: (state, action) => action.payload
});
