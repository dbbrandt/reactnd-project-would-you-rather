import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Main from "../main/Main";
import Nav from "../nav/Nav";
import Heading from "../heading/Heading";
import Footer from "../footer/Footer";
import { handleGetInitialData } from "../../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetInitialData());
  }

  render() {
    const { loading } = this.props;
    console.log('App loading: ', loading);
    return (
      <div className="container-grid main-layout">
        <Heading />
        <Nav />
        <Main loading={loading}/>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  console.log('App users: ', users)
  return {
    loading: users === null
  };
}

export default connect(mapStateToProps)(App);
