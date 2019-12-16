import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    const { loginLink } = this.props;
    return (
      <nav className="container-grid layout-section navigation">
        <div className="nav-bar">
          <div className="nav-links">
            <div>
              <NavLink exact to="/" activeClassName="nav-active">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/add" activeClassName="nav-active">
                Add Question
              </NavLink>
            </div>
            <div>
              <NavLink to="/leader-board" activeClassName="nav-active">
                Leader Board
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/" + loginLink.toLowerCase()}
                activeClassName="nav-active"
              >
                {loginLink}
              </NavLink>
            </div>
          </div>
          <div className="instructions">
            Get points by answering question and adding new ones!
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(
  connect(({ authedUser }) => ({
    loginLink: !!authedUser ? "Logout" : "Login"
  }))(Nav)
);
