import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {handleAuthenticateUser, logoutUser} from "../../actions/authedUser";
import "./Login.css";
import {hideLoading, showLoading} from "react-redux-loading-bar";

class Login extends Component {
  state = {
    userId: ""
  };
  //
  // componentDidMount() {
  //   const { authedUser, logout, dispatch } = this.props;
  //   if (!!authedUser) {
  //     if (logout) {
  //       dispatch(logoutUser());
  //       this.setState({ userId: "" });
  //     } else {
  //       this.setState({ userId: authedUser.id });
  //     }
  //   }
  // }

  handleChange = event => {
    const id = event.target.value;
    this.setState({ userId: id });
    const { dispatch, history, users, location } = this.props;
    const user = users[id];
    console.log('Login location: ', location)
    const destRoute = ['/login','/logout'].includes(location.pathname) ? '/' : location.pathname;
    console.log('Login Dest Route: ', destRoute)
    dispatch(showLoading());
    setTimeout(() => {
        dispatch(handleAuthenticateUser(user));
        history.push(destRoute);
        dispatch(hideLoading());
    },2);
  };

  render() {
    const { users } = this.props;
    const selectedUser = users[this.state.userId];
    return (
      <div className="login">
        <div>
          {!!selectedUser &&
          <img className='user-image' alt='avatar' src={selectedUser.avatarURL}/>
          }

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
