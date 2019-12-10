import React, { Component } from "react";
import QuestionList from "../question/QuestionList";
import Auth from "../login/Auth";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Auth/>
        <div className="dashboard-lists">
          <QuestionList />
          <QuestionList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
