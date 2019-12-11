import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from "react-router-dom";
import './Nav.css'
import headerImage from "../../assets/would-you-rather.jpeg";

class Nav extends Component {

  render() {
    const { loginLink } = this.props;
    return (
      <nav className="container-grid layout-section navigation">
        <div className='nav-links'>
          <img alt='Would You Rather?' src={headerImage}/>
          <ul>
            <li><NavLink exact to='/' activeClassName='nav-active'>Home</NavLink></li>
            <li><NavLink to='/add-question' activeClassName='nav-active'>Add Question</NavLink></li>
            <li><NavLink to='/leader-board' activeClassName='nav-active'>Leader Board</NavLink></li>
            <li>
              <NavLink to={'/' + loginLink.toLowerCase()} activeClassName='nav-active'>
                { loginLink }
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(connect(({ authedUser }) => ({
  loginLink: !!authedUser ? 'Logout' : 'Login'
}))(Nav));
