import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Question.css";

class QuestionAnswer extends Component {
  state = {
    option: null
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Add question.
    this.props.history.push('/');
  };

  render() {
    const { users, questions, id, history } = this.props;
    const question = questions[id];
    if (!question) {
      return <h3>Question not found.</h3>;
    }
    const { author, optionOne, optionTwo } = question;
    const { name, avatarURL } = users[author];
    const totalVotes = [...optionOne.votes, ...optionTwo.votes].length;
    return (
      <form className="question-view" onSubmit={this.handleSubmit}>
        <div>{name} asks:</div>
        <div>
          <img alt={author} src={avatarURL} />
        </div>
        <div className="answer-text">
          <div>
            What would your rather {optionOne.text}?
          </div>
          <div className='input'>
            <input
              type="radio"
              name="vote"
              value="option1"
              className="vote"
            />
          </div>
        </div>
        <div className="answer-text">
          <div>
            What would you rather {optionTwo.text}?
          </div>
          <div className='input'>
            <input
              type="radio"
              name="vote"
              value="option2"
              className="vote"
            />
          </div>
        </div>
        <div>
          <button type="submit">Answer</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ users, questions }, { match }) => ({
  id: match.params.id,
  users,
  questions
});

export default withRouter(connect(mapStateToProps)(QuestionAnswer));
