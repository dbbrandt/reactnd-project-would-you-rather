import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserStats from "./UserStats";
import { getLeaders } from '../../utils/helpers'
import './LeaderBoard.css';

class LeaderBoard extends Component {
  render() {
    const { leaders } = this.props;
    return (
      <div className='leader-board'>
        <div className='heading'>Leader Board</div>
        {leaders.map( (user, index) => (
            <UserStats key={user.id} user={user} rank={index+1}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  leaders: getLeaders(users)
});

export default connect(mapStateToProps)(LeaderBoard);

