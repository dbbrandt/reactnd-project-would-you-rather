import React, { Component, Fragment } from "react";
import Login from "../shared/Login";
import Dashboard from "../dashboard/Dashboard";
import AddQuestion from "../add-question/AddQueston";
import LeaderBoard from "../leader-board/LeaderBoard";
import Question from "../question/Question";
import "./Main.css";

class Main extends Component {
  render() {
    const { loading } = this.props;
    return (
      <main className="container-grid layout-section main">
        {loading ? null : (
          <Fragment>
            <Login />
            <Dashboard />
            <Question />
            <AddQuestion />
            <LeaderBoard />
          </Fragment>
        )}
      </main>
    );
  }
}

export default Main;
