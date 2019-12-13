import { combineReducers } from "redux";
import { loadingBarReducer} from "react-redux-loading-bar";
import { authedUser } from "./authedUser";
import {  users } from "./users";
import { questions } from "./questions";
import { loading } from "./loading";

const reducer = combineReducers({
  authedUser,
  users,
  questions,
  loading,
  loadingBar: loadingBarReducer
});

export default reducer;
