import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Question.css";

class QuestionDetail extends Component {
  render() {
    const { id, author, text, answered, history, authedUser } = this.props;
    const answeredText = answered ? "View" : "Answer";
    const answerURL = "/" + answeredText.toLowerCase() + "/" + id;
    const prompt = (author.id === authedUser) ? 'You asked:' : author.name + ' asks:';
    return (
      <div className="question-detail">
        <div className='heading'>{prompt}</div>
        <div>
          <img alt={author.name} src={author.avatarURL} />
        </div>
        <div className='prompt'>Would you rather...</div>
        <div className="text">...{text}...</div>
        <div className='btn'>
          <button onClick={() => history.push(answerURL)}>
            {answeredText}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }, { question }) => {
  const { id, author, optionOne, optionTwo } = question;
  const votes = [...optionOne.votes, ...optionTwo.votes];
  const user = users[author];
  return {
    id,
    author: user,
    text: optionOne.text,
    answered: votes.includes(authedUser),
    authedUser
  };
};

export default withRouter(connect(mapStateToProps)(QuestionDetail));
