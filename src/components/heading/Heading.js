import React, {Component } from 'react';
import LoadingBar from "react-redux-loading";
import './Heading.css';

class Heading extends Component {
  render() {
    return (
      <header className="container-grid layout-section header">
        <LoadingBar className='loading-bar'/>
        <h3>Heading</h3>
      </header>
    )
  }
}

export default Heading;
