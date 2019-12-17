import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Question.css";
import { handleAddQuestion } from "../../actions/questions";

class QuestionAdd extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { authedUser, dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));
    this.setState({
      optionOneText: '',
      optionTwoText: ''
    });
    this.props.history.push('/');
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    const { name, avatarURL } = this.props.currentUser;
    return (
      <form className="question-view box" onSubmit={this.handleSubmit}>
        <div className='heading'>
          Create a New Question!
        </div>
        <div>
          <img alt={name} src={avatarURL} />
        </div>
        <div>
          Would you rather...
        </div>
        <textarea
          maxLength={80}
          rows={4}
          className="question-option-text"
          name="optionOneText"
          placeholder='Option one....'
          value={optionOneText}
          onChange={this.handleChange}
        />
        <div className='question-or'>OR</div>
        <textarea
          maxLength={80}
          rows={4}
          className="question-option-text"
          name="optionTwoText"
          placeholder='Option two....'
          value={optionTwoText}
          onChange={this.handleChange}
        />
        <div className='btn'>
          <button type="submit" disabled={!this.state.optionOneText || !this.state.optionTwoText }>Save</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
    authedUser,
    currentUser: users[authedUser]
});

export default withRouter(connect(mapStateToProps)(QuestionAdd));
