import React, { Component } from 'react';
import Login from "../shared/Login";
import Dashboard from "../dashboard/Dashboard";
import AddQuestion from "../add-question/AddQueston";
import LeaderBoard from "../leader-board/LeaderBoard";

class Main extends Component {
  render() {
    return (
      <main className="container layout-section main">
        <Login/>
        <Dashboard/>
        <AddQuestion/>
        <LeaderBoard/>
      </main>
    )
  }
}

export default Main;
