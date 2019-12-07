import { fetchQuestions } from "./questions";
import { fetchUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../api";

export const handleGetInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    getInitialData()
      .then((users, questions) => {
        dispatch(fetchUsers(users));
        dispatch(fetchQuestions(questions));
      })
      .then(dispatch(hideLoading()))
      .catch(exception => {
        console.log('HandleGetInitialData exception: ' + exception);
        alert('Error loading data. Please try again.' + exception);
      });
  };
};
