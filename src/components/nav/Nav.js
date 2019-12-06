import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <nav className="container layout-section navigation">
        <div className='nav-links'>
          <ul>
            <li>Home</li>
            <li>Add Question</li>
            <li>Leader Board</li>
            <li>Logout</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
