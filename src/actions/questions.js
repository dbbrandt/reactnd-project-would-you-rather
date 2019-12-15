import { createAction } from "@reduxjs/toolkit";
import { saveQuestion } from "../utils";

export const fetchQuestions = createAction("FETCH_QUESTIONS");

export const addQuestion = createAction("ADD_QUESTION");
export const saveQuestionAnswer = createAction("SAVE_QUESTION_ANSWER");

export const handleAddQuestion = (optionOneText, optionTwoText, author) => {
  return dispatch => {
    saveQuestion(optionOneText, optionTwoText, author)
      .then(question => dispatch(addQuestion(question)))
      .catch(exception => {
        console.log("HandleAddQuestion exception: " + exception);
        alert("Error saving data. Please try again." + exception);
      });
  };
};
