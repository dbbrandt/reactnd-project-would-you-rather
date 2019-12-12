import React, { Component } from "react";
import { connect } from 'react-redux';
import QuestionList from "../question/QuestionList";
import Auth from "../login/Auth";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div className='dashboard-lists'>
        <Auth/>
        <div className="dashboard-lists">
          <QuestionList questions={Object.values(questions)} heading='Answered' />
          <QuestionList questions={Object.values(questions)} heading='Un-Answered' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps)(Dashboard);
