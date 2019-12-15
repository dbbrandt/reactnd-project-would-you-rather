import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from "react-router-dom";
import './Nav.css'

class Nav extends Component {

  render() {
    const { loginLink } = this.props;
    return (
      <nav className="container-grid layout-section navigation">
        <ul className='nav-links'>
          <li><NavLink exact to='/' activeClassName='nav-active'>Home</NavLink></li>
          <li><NavLink to='/add' activeClassName='nav-active'>Add Question</NavLink></li>
          <li><NavLink to='/leader-board' activeClassName='nav-active'>Leader Board</NavLink></li>
          <li>
            <NavLink to={'/' + loginLink.toLowerCase()} activeClassName='nav-active'>
              { loginLink }
            </NavLink>
          </li>
          <li className='instructions'>
            Get points by answering question and adding new ones!
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(connect(({ authedUser }) => ({
  loginLink: !!authedUser ? 'Logout' : 'Login'
}))(Nav));
