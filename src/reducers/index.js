import { combineReducers } from "redux";
import { loadingBarReducer} from "react-redux-loading";
import { authedUser } from "./authedUser";
import {  users } from "./users";
import { questions } from "./questiions";

const reducer = combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
});

export default reducer;
