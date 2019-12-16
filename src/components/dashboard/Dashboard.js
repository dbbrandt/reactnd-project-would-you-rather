import React, { Component } from "react";
import { connect } from 'react-redux';
import QuestionList from "../question/QuestionList";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    const { answered, unAnswered } = this.props;
    return (
      <div className='dashboard-lists'>
        <div className="dashboard-list">
          <QuestionList questions={unAnswered} heading='Un-Answered' />
          <QuestionList questions={answered} heading='Answered' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const qArray = Object.values(questions);
  const currentUser = users[authedUser];
  const answered = [];
  const unAnswered = [];
  qArray.forEach((question) => {
    Object.keys(currentUser.answers).includes(question.id) ? answered.push(question) : unAnswered.push(question);
  });
  return ({
    answered,
    unAnswered
})};

export default connect(mapStateToProps)(Dashboard);
