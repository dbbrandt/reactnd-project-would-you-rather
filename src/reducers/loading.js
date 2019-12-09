import { createReducer } from "@reduxjs/toolkit";
import { setLoading } from "../actions/loading";

export const loading = createReducer( false, {
  [setLoading]: (state, action) => action.payload
});
