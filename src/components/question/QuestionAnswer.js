import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Question.css";
import { handleSaveQuestionAnswer } from "../../actions/shared";

class QuestionAnswer extends Component {
  state = {
    option: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, authedUser, dispatch } = this.props;
    dispatch(handleSaveQuestionAnswer(authedUser, id, this.state.option));
    this.props.history.push("/");
  };

  handleChange = event => {
    this.setState({ option: event.target.value });
  };

  render() {
    const { users, questions, id } = this.props;
    const question = questions[id];
    if (!question) {
      return <h3>Question not found.</h3>;
    }
    const { author, optionOne, optionTwo } = question;
    const { name, avatarURL } = users[author];
    return (
      <form className="question-view box" onSubmit={this.handleSubmit}>
        <div>{name} asks:</div>
        <div>
          <img alt={author} src={avatarURL} />
        </div>
        <div>Would you rather...</div>
        <div className="question-option-text">
          <div>{optionOne.text}?</div>
          <div>
            <label className="input">
              <input
                type="radio"
                name="vote"
                value="optionOne"
                className="vote"
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <div className="question-or">OR</div>
        <div className="question-option-text">
          <div>{optionTwo.text}?</div>
          <div>
            <label className="input">
              <input
                type="radio"
                name="vote"
                value="optionTwo"
                className="vote"
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <div className="btn">
          <button type="submit" disabled={!this.state.option}>
            Answer
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, { match }) => ({
  id: match.params.id,
  users,
  questions,
  authedUser
});

export default withRouter(connect(mapStateToProps)(QuestionAnswer));
