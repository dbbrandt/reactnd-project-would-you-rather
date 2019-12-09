import React, { Component } from "react";
import {connect} from "react-redux";
import { Redirect, withRouter } from 'react-router-dom'

class Auth extends Component {
  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return <Redirect to="login"/>;
    }
    return null;
 }
}

export default withRouter(connect(({authedUser}) => ({authedUser}))(Auth));