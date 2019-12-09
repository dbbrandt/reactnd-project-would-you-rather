import { fetchUsers } from "./users";
import { fetchQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../api";
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
