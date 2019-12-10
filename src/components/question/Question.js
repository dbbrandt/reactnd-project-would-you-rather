import React, {Component } from 'react';
import Prompt from "./Prompt";
import Results from "./Results";
import Auth from "../login/Auth";

class Question extends Component {
  render() {
    return (
      <div>
        <Auth/>
        <h3>Question</h3>
        <Prompt/>
        <Results/>
      </div>
    )
  }
}

export default Question;
