import React, {Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Question.css';

class Question extends Component {
  render() {
    console.log('Question props:', this.props)
    const { users, questions, id } = this.props;
    const question = questions[id];
    if (!question) {
      return <h3>Question not found.</h3>
    }
    const { author, optionOne, optionTwo } = question;
    const { name, avatarURL } = users[author];
    const totalVotes = [...optionOne.votes, ...optionTwo.votes].length;
    return (
      <div className='question-view '>
        <div className='heading'>Results</div>
        <div>{name} asks:</div>
        <div><img alt={author} src={avatarURL}/></div>
        <div className='text'>
          <div>Would you rather {optionOne.text}?</div>
          <div className='votes'>{optionOne.votes.length} of {totalVotes} Votes</div>
        </div>
        <div className='text'>
          <div>Would you rather {optionTwo.text}?</div>
          <div className='votes'>{optionTwo.votes.length} of {totalVotes} Votes</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions }, { match }) => ({
  id: match.params.id,
  users,
  questions,
});

export default withRouter(connect(mapStateToProps)(Question));
