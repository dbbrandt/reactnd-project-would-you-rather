import { createReducer } from "@reduxjs/toolkit";
import {fetchUsers} from "../actions/users";

export const users = createReducer(null,{
  [fetchUsers]: (state, action) => action.payload
});
