import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAuthenticateUser } from "../../actions/authedUser";
import "./Login.css";
import { hideLoading, showLoading } from "react-redux-loading-bar";

class Login extends Component {
  state = {
    userId: ""
  };

  handleChange = event => {
    const id = event.target.value;
    this.setState({ userId: id });
    const { dispatch, history, users, location } = this.props;
    const user = users[id];
    const destRoute = ["/login", "/logout"].includes(location.pathname)
      ? "/"
      : location.pathname;
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(handleAuthenticateUser(user.id));
      history.push(destRoute);
      dispatch(hideLoading());
    }, 2);
  };

  render() {
    const { users } = this.props;
    const selectedUser = users[this.state.userId];
    return (
      <div className="login">
        <div>
          {!!selectedUser && (
            <img
              className="user-image"
              alt="avatar"
              src={selectedUser.avatarURL}
            />
          )}
        </div>
        <div className="select-user">
          <label>Login:</label>
          <select
            className="selectpicker"
            value={this.state.userId}
            placeholder="Choose...."
            onChange={this.handleChange}
          >
            <option key="choose" value="" disabled>
              Choose a user...
            </option>
            {Object.keys(users).map(id => (
              <option key={id} value={id}>
                {users[id].name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }, { logout }) => ({
  users,
  authedUser,
  logout: !!logout
});

export default withRouter(connect(mapStateToProps)(Login));
