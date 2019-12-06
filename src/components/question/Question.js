import React, { Component } from 'react';
import Prompt from "./Prompt";
import Results from "./Results";

class Question extends Component {
  render() {
    return (
      <div>
        <h3>Question</h3>
        <Prompt/>
        <Results/>
      </div>
    )
  }
}

export default Question;
