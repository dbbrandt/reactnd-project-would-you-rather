import { createReducer } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/users";
import { saveQuestionAnswer } from "../actions/questions";

export const users = createReducer({},{
    [fetchUsers]: (state, action) => action.payload,
    [saveQuestionAnswer]: (state, action) => {
      const { authedUser, id, answer } = action.payload;
      console.log("user reducer - saveQuestionAnswer: ", action.payload);
      state[authedUser].answers[id] = answer;
    }
  }
);
