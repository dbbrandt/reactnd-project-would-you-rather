import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserStats from "./UserStats";
import './LeaderBoard.css';

class LeaderBoard extends Component {
  render() {
    const { leaders } = this.props;
    return (
      <div className='leader-board'>
        <div className='heading'>Leader Board</div>
        {leaders.map( (user) => (
            <UserStats key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  let leaders = Object.values(users).map(user => {
    const {id, name, avatarURL, questions, answers} = user;
    return ({
      id,
      name,
      avatarURL,
      questionCount: questions.length,
      answerCount: Object.keys(answers).length,
      score: questions.length + Object.keys(answers).length
    })
  });
  return ({
    leaders: leaders.sort((a,b) => b.score - a.score)
  });
};

export default connect(mapStateToProps)(LeaderBoard);

