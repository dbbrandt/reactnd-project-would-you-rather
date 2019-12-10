import { createReducer } from "@reduxjs/toolkit";
import {authenticateUser, logoutUser} from "../actions/authedUser";

export const authedUser = createReducer(null,{
  [authenticateUser]: (state, action) => action.payload,
  [logoutUser]: (state, action) => null
});
