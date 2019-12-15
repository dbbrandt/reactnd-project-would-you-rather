import { fetchUsers } from "./users";
import { fetchQuestions, saveQuestionAnswer } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData, saveAnswer } from "../utils";
import { setLoading } from "./loading";

export const handleGetInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    dispatch(setLoading(true));
    getInitialData()
      .then(({ users, questions }) => {
        dispatch(fetchUsers(users));
        dispatch(fetchQuestions(questions));
        dispatch(hideLoading())
        dispatch(setLoading(false));
      })
      .catch(exception => {
        console.log('HandleGetInitialData exception: ' + exception);
        alert('Error loading data. Please try again.' + exception);
      });
  };
};

export const handleSaveQuestionAnswer = (authedUser, id, answer) => {
  return dispatch => {
    saveAnswer(authedUser, id, answer)
      .then(() => {
        dispatch(saveQuestionAnswer({authedUser, id, answer}));
      })
      .catch(exception => {
        console.log('HandleQuestionAnswer exception: ' + exception);
        alert('Error saving data. Please try again.' + exception);
      });
  }
};
