import React, {Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Question.css';

class QuestionView extends Component {
  votePct = (num, den) => {
    return 100*(num/den).toFixed(2)
  };

  tallyVotes = (optionOne, optionTwo) => {
    const totalVotes = [...optionOne.votes, ...optionTwo.votes].length;
    const oneVotes = optionOne.votes.length;
    const twoVotes = optionTwo.votes.length;
    const onePct = this.votePct(oneVotes, totalVotes);
    const twoPct = this.votePct(twoVotes, totalVotes);
    return { oneVotes, onePct, twoVotes, twoPct, totalVotes };
  };

  render() {
    const { users, questions, id, history } = this.props;
    const question = questions[id];
    if (!question) {
      return <h3>Question not found.</h3>
    }
    const { author, optionOne, optionTwo } = question;
    const { name, avatarURL } = users[author];
    const { oneVotes, onePct, twoVotes, twoPct, totalVotes } = this.tallyVotes(optionOne, optionTwo);
    return (
      <div className='question-view '>
        <div className='heading'>Results</div>
        <div>{name} asks:</div>
        <div><img alt={author} src={avatarURL}/></div>
        <div className='text'>
          <div>Would you rather {optionOne.text}?</div>
          <div className='votes'>{onePct}%</div>
          <div className='votes'>{oneVotes} of {totalVotes} Votes</div>
        </div>
        <div className='text'>
          <div>Would you rather {optionTwo.text}?</div>
          <div className='votes'>{twoPct}%</div>
          <div className='votes'>{twoVotes} of {totalVotes} Votes</div>
        </div>
        <div><button onClick={() => history.push('/')}>Done</button></div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions }, { match }) => ({
  id: match.params.id,
  users,
  questions,
});

export default withRouter(connect(mapStateToProps)(QuestionView));
