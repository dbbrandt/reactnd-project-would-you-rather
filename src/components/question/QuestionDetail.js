import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Question.css";

class QuestionDetail extends Component {
  render() {
    const { id, author, avatarURL, text, answered, history } = this.props;
    const answeredText = answered ? "View" : "Answer";
    const answerURL = "/question-" + answeredText.toLowerCase() + "/" + id;
    return (
      <div className="question-detail">
        <div>{author} asks:</div>
        <div>
          <img alt={author} src={avatarURL} />
        </div>
        <div>Would you rather...</div>
        <div className="text">...{text}...</div>
        <div>
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
