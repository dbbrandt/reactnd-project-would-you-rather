import { createReducer } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/users";
import {addQuestion, saveQuestionAnswer} from "../actions/questions";

export const users = createReducer({}, {
  [fetchUsers]: (state, action) => action.payload,
  [saveQuestionAnswer]: (state, action) => {
    const {authedUser, id, answer} = action.payload;
    state[authedUser].answers[id] = answer;
  },
  [addQuestion]: (state, action) => {
    const {author, id} = action.payload;
    state[author].questions.push(id);
  }
});
