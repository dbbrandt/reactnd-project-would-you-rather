import React from 'react';
import './Question.css';
import yourVoteImg from '../../assets/your-vote.png'

const QuestionOption = (props) => {
  const { text, percent, votes, totalVotes, myVote } = props.votes;
  return(
    <div className='question-option'>
      <div className='text'>
        {text}?
      </div>
      <div className='stats'>
        {myVote &&
        <div className='your-vote'>
          <img alt='My Vote!' src={yourVoteImg}/>
        </div>
        }
        <div className='votes'>{percent}%</div>
        <div className='votes'>{votes} of {totalVotes} Votes</div>
      </div>
    </div>
  )
};

export default QuestionOption;
