import React, { Component } from "react";
import "./LeaderBoard.css";

class UserStats extends Component {
  render() {
    const { user, rank } = this.props;
    const { name, avatarURL, answerCount, questionCount, score } = user;
    return (
      <div className="leader-board-slot">
        <div className="user-stats">
          <div>{rank}. {name}</div>
          <div className='avatar'>
            <img alt={name} src={avatarURL} />
          </div>
        </div>
        <div className="user-score">
          <div>
            <div>Answers: {questionCount}</div>
            <div>Questions: {answerCount}</div>
            <div className='total'>Total Score!<br/>{score} points.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserStats;
