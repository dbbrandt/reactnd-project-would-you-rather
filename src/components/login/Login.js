import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {handleAuthenticateUser} from "../../actions/authedUser";
import {hideLoading, showLoading} from "react-redux-loading";
import { setLoading } from "../../actions/loading";

class Login extends Component {
  state = {
    userId: ''
  };

  setAuthUser = ( id ) => {
    this.setState({ userId: id });
    const { dispatch, history, users } = this.props;
    const user = users[id];
    dispatch(showLoading());
    dispatch(setLoading(true));
    setTimeout( (users) => {
      dispatch(handleAuthenticateUser(user));
      dispatch(hideLoading());
      history.push('/');
      dispatch(setLoading(false));
    }, 2000);
  };

  render() {
    const { users } = this.props;
    return (
        <div>
          <button onClick={(event) => this.setAuthUser('danielbrandt')}>Login: {Object.keys(users).length}</button>
        </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

export default withRouter(connect(mapStateToProps)(Login));
