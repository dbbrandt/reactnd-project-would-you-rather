import React, { Component } from "react";
import { connect } from 'react-redux';
import QuestionList from "../question/QuestionList";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    showAnswered: false
  };

  handleClick = (event) => {
    console.log('Dashboard handleClick showAnswered: ', event.target.name);
    this.setState({showAnswered: event.target.name === 'answered'});
  };

  render() {
    const { answered, unAnswered } = this.props;
    const { showAnswered } = this.state;
    console.log('Dashboard render showAnswered: ', showAnswered);
    return (
      <div className='dashboard-lists'>
        <div className='buttons'>
          <span>Show: </span>
          <button
            name='un-answered'
            className={!showAnswered ? 'btn-active' : 'btn-available'}
            // disabled={!answered}
            onClick={this.handleClick}
          >
            Un-Answered
          </button>
          <button
            name='answered'
            className={showAnswered ? 'btn-active' : 'btn-available'}
            // disabled={!!answered}
            onClick={this.handleClick}
          >
            Answered
          </button>
        </div>
        <div className="dashboard-list">
          {showAnswered ?
            <QuestionList questions={answered} heading='Answered'/>
            :
            <QuestionList questions={unAnswered} heading='Un-Answered'/>
          }
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
    answered: answered.sort((a,b) => b.timestamp - a.timestamp),
    unAnswered: unAnswered.sort((a,b) => b.timestamp - a.timestamp),
})};

export default connect(mapStateToProps)(Dashboard);
