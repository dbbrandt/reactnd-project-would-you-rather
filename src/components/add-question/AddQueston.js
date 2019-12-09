import React, { Component } from 'react';
import Auth from "../login/Auth";

class AddQuestion extends Component {
  render() {
    return (
      <div>
        <Auth/>
        <h3>Add Question</h3>
      </div>
    )
  }
}

export default AddQuestion;
