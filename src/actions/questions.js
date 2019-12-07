import { createAction } from "@reduxjs/toolkit";

export const fetchQuestions = createAction('FETCH_USERS');

export const addQuestion = createAction("ADD_QUESTION");
export const saveQuestionAnswer = createAction("SAVE_QUESTION_ANSWER");
