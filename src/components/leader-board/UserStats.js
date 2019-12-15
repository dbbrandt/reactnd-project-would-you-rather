import React, { Component } from "react";
import { connect } from "react-redux";
import "./LeaderBoard.css";

class UserStats extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answerCount, questionCount, score } = user;
    return (
      <div className="leader-board-slot">
        <div className="user-stats-user">
          <div>{name}</div>
          <div>
            <img alt={name} src={avatarURL} />
          </div>
        </div>
        <div className="user-stats-score">
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

const mapStateToProps = ({ authedUser }, { user }) => ({
  user
});

export default connect(mapStateToProps)(UserStats);
