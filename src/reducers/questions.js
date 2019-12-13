import { createReducer } from "@reduxjs/toolkit";
import { fetchQuestions, saveQuestionAnswer } from "../actions/questions";

export const questions = createReducer({},{
  [fetchQuestions]: (state, action) =>  action.payload,
  [saveQuestionAnswer]: (state, action) => {
    const {authedUser, id, answer} = action.payload;
    state[id][answer].votes.push(authedUser)
  }
});
