import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Question.css";
import QuestionOption from "./QuestionOption";
import NotFound from "../login/NotFound";
class QuestionView extends Component {

  votePct = (num, den) => {
    return 100 * (num / den).toFixed(2);
  };

  isMyVote = (option) => {
    return option.votes.includes(this.props.authedUser);
  };

  tallyVotes = ( one, two ) => {
    const totalVotes = one.votes.length + two.votes.length;
    return {
      optionOne: {
        text: one.text,
        votes: one.votes.length,
        percent: this.votePct(one.votes.length, totalVotes),
        totalVotes: totalVotes,
        myVote: this.isMyVote(one)
      },
      optionTwo: {
        text: two.text,
        votes: two.votes.length,
        percent: this.votePct(two.votes.length, totalVotes),
        totalVotes: totalVotes,
        myVote: this.isMyVote(two)
      }
    }
  };

  render() {
    const { authedUser, question, author, history } = this.props;
    if (!question) {
      return <NotFound/>;
    }
    const { optionOne, optionTwo } = question;
    const { name, avatarURL } = author;
    const prompt = (author.id === authedUser) ? 'You asked:' : name + ' asks:';
    const voteTally = this.tallyVotes(optionOne,optionTwo);

    return (
      <div className="question-view box">
        <div className="heading">Results</div>
        <div>{prompt}</div>
        <div className='author'>
          <img alt={ name } src={ avatarURL } />
        </div>
        <div className='prompt'>
          Would you rather...
        </div>
        <QuestionOption votes={voteTally.optionOne}/>
        <div className='question-or'>
          OR
        </div>
        <QuestionOption votes={voteTally.optionTwo}/>
        <div className='answer-btn'>
          <button onClick={() => history.push("/")}>Done</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, { match }) => {
  const id = match.params.id;
  const question = questions[id];
  const author = !!question ? users[question.author] : null;
  return ({
  authedUser,
  question,
  author
})};

export default withRouter(connect(mapStateToProps)(QuestionView));
