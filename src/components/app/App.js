import React, { Component } from 'react';
import './App.css';
import Main from "../main/Main";
import Nav from "../nav/Nav";
import Heading from "../heading/Heanding";
import Footer from "../footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="container grid-layout">
        <Heading/>
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;
