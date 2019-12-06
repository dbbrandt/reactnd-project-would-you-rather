import React, { Component } from 'react';
import UserStats from "./UserStats";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h3>Leader Board</h3>
        <ul>
          <li><UserStats/></li>
          <li><UserStats/></li>
        </ul>
      </div>
    )
  }
}

export default LeaderBoard;
