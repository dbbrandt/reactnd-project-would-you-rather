import React, { Component } from 'react';
import UserStats from "./UserStats";
import Auth from "../login/Auth";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <Auth/>
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
