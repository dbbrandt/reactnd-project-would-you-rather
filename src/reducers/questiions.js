import { createReducer } from "@reduxjs/toolkit";
import { fetchQuestions} from "../actions/questions";

export const questions = createReducer({},{
  [fetchQuestions]: (state, action) =>  action.payload
});
