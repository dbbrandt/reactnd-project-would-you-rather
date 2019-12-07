import React, { Component } from 'react';
import Login from "../shared/Login";
import Dashboard from "../dashboard/Dashboard";
import AddQuestion from "../add-question/AddQueston";
import LeaderBoard from "../leader-board/LeaderBoard";
import Question from "../question/Question";

import './Main.css';

class Main extends Component {
  render() {
    return (
      <main className="container-grid layout-section main">
        <Login/>
        <Dashboard/>
        <Question/>
        <AddQuestion/>
        <LeaderBoard/>
      </main>
    )
  }
}

export default Main;
