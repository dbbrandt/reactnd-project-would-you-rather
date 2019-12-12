import React, { Component } from "react";
import { connect } from 'react-redux';
import QuestionList from "../question/QuestionList";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    const { answered, unAnswered } = this.props;
    return (
      <div className='dashboard-lists'>
        <div className="dashboard-lists">
          <QuestionList questions={answered} heading='Answered' />
          <QuestionList questions={unAnswered} heading='Un-Answered' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  const qArray = Object.values(questions);
  const answered = [];
  const unAnswered = [];
  qArray.forEach((question) => {
    Object.keys(authedUser.answers).includes(question.id) ? answered.push(question) : unAnswered.push(question);
  });
  return ({
    answered,
    unAnswered
})};

export default connect(mapStateToProps)(Dashboard);
