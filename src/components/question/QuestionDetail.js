import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Question.css";

class QuestionDetail extends Component {
  render() {
    const { id, author, avatarURL, text, answered, history } = this.props;
    const answeredText = answered ? "View" : "Answer";
    const answerURL = "/" + answeredText.toLowerCase() + "/" + id;
    return (
      <div className="question-detail">
        <div className='heading'>{author} asks:</div>
        <div>
          <img alt={author} src={avatarURL} />
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
  const { name, avatarURL } = users[author];
  return {
    id,
    author: name,
    avatarURL,
    text: optionOne.text,
    answered: votes.includes(authedUser)
  };
};

export default withRouter(connect(mapStateToProps)(QuestionDetail));
