import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { logoutUser } from "../../actions/authedUser";

const Logout = ({ dispatch }) => {
  console.log("Logout distpatching logout");
  dispatch(logoutUser());
  return <Redirect to="/login" />;
};

export default withRouter(connect()(Logout));
