import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./App.css";
import { LoadingBar } from "react-redux-loading";
import Main from "../main/Main";
import Nav from "../nav/Nav";
import Heading from "../heading/Heanding";
import Footer from "../footer/Footer";
import { handleGetInitialData } from "../../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="container-grid main-layout">
          <Heading />
          <Nav />
          <Main />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default connect()(App);
