import React from 'react';
import './Question.css';
import myVoteImg from '../../assets/my-vote1.png'

const QuestionOption = (props) => {
  const { text, percent, votes, totalVotes, myVote } = props.votes;
  return(
    <div className='option-text'>
      <div>Would you rather {text}?</div>
      <div className='votes'>{percent}%</div>
      <div className='votes'>{votes} of {totalVotes} Votes</div>
      {myVote &&
        <div>
          <img alt='My Vote!' src={myVoteImg}/>
        </div>
      }
    </div>
  )
};

export default QuestionOption;
