import React, { Component } from "react";
import QuestionList from "../question/QuestionList";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-lists">
          <QuestionList />
          <QuestionList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
