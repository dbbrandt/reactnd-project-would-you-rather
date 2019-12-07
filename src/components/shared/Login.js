import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { users } = this.props;
    console.log('Login users: ', users);
    return (
      <div>
        <h3>Login: {Object.keys(users).length}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps)(Login);
