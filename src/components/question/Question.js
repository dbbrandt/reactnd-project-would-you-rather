import React, {Component } from 'react';
import { connect } from 'react-redux';
import Auth from "../login/Auth";
import './Question.css';

class Question extends Component {
  render() {
    const { author, avatarURL, text, answered  } = this.props;
    return (
      <div className='question-view'>
        <Auth/>
        <div>{author} asks:</div>
        <div><img alt={author} src={avatarURL}/></div>
        <div>Would you rather...</div>
        <div className='text'>...{text}...</div>
        <div><button>{answered ? 'View' : 'Answer'}</button></div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser}, { question }) => {
  const { author, optionOne, optionTwo } = question;
  const votes = [...optionOne.votes, ...optionTwo.votes];
  console.log('Question mapStateToProps votes:', votes);
  const { name, avatarURL } = users[author];
   return ({
     author: name,
     avatarURL,
     text: optionOne.text,
     answered: votes.includes(authedUser.id)
  });
};

export default connect(mapStateToProps)(Question);
