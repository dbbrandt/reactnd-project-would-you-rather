import React, { Component } from "react";
import Question from "./Question";
import './QuestionList.css'
import Auth from "../login/Auth";

class QuestionList extends Component {
  render() {
    const { heading, questions } = this.props;
    return (
      <div className='question-section'>
        <Auth/>
        <div className='heading'>
          <h3>{heading}</h3>
        </div>
        {questions && (
          <div>
            { questions.map(question => (
            <Question key={question.id} question={question} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default QuestionList;
