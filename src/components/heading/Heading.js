import React, {Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from "react-redux-loading";
import './Heading.css';

class Heading extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <header className="container-grid layout-section header">
        <LoadingBar className='loading-bar'/>
        <div>
          {!!authedUser &&
          <img className='user-image' alt={authedUser.name} src={authedUser.avatarURL}/>
          }
        </div>
      </header>
    )
  }
}

export default connect(({ authedUser }) => ({ authedUser }))(Heading);
