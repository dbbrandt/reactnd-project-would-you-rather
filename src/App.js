import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container holy-grail">
        <header className="container layout-section header">
          <h3 className="heading-text">Heading</h3>
        </header>
        <main className="container layout-section main">
          <h3 className="main-text" >Main</h3>
        </main>
        <nav className="container layout-section navigation">
          <h3 className="navigation-text">Navigation</h3>
        </nav>
        <footer className="container layout-section footer">
          <h3 className="footer-text">Footer</h3>
        </footer>
      </div>
    )
  }
}

export default App;
