import { fetchUsers } from "./users";
import { fetchQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../api";

export const handleGetInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    getInitialData()
      .then(({ users, questions }) => {
        console.log('Handle Get Initial Data users: ', users);
        console.log('Handle Get Initial Data questions: ', questions);
        dispatch(fetchUsers(users));
        dispatch(fetchQuestions(questions));
        dispatch(hideLoading())
      })
      .catch(exception => {
        console.log('HandleGetInitialData exception: ' + exception);
        alert('Error loading data. Please try again.' + exception);
      });
  };
};
