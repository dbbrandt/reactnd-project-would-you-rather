import React, { Component } from "react";
import QuestionDetail from "./QuestionDetail";
import './Dashboard.css'

class QuestionList extends Component {
  render() {
    const { heading, questions } = this.props;
    return (
      <div className='question-section box'>
        <div className='heading'>
          <h3>{heading}</h3>
        </div>
        {questions && (
          <div>
            { questions.map(question => (
            <QuestionDetail key={question.id} question={question} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default QuestionList;
