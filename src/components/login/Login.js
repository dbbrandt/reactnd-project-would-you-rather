import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {handleAuthenticateUser, logoutUser} from "../../actions/authedUser";
import "./Login.css";
import {hideLoading, showLoading} from "react-redux-loading";

class Login extends Component {
  state = {
    userId: ""
  };

  componentDidMount() {
    const { authedUser, logout, dispatch } = this.props;
    if (!!authedUser) {
      if (logout) {
        dispatch(logoutUser());
        this.setState({ userId: "" });
      } else {
        this.setState({ userId: authedUser.id });
      }
    }
  }

  handleChange = event => {
    const id = event.target.value;
    this.setState({ userId: id });
    const { dispatch, history, users } = this.props;
    const user = users[id];
    dispatch(showLoading());
    setTimeout(() => {
        dispatch(handleAuthenticateUser(user));
        history.push("/");
        dispatch(hideLoading());
    },2000);
  };

  render() {
    const { users } = this.props;
    const currentUser = users[this.state.userId];
    return (
      <div className="login">
        <div>
          {!!currentUser &&
          <img className='user-image' alt='avatar' src={currentUser.avatarURL}/>
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
