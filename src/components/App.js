import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./nav/Nav";
import Heading from "./heading/Heading";
import Footer from "./footer/Footer";
import { handleGetInitialData } from "./../actions/shared";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Logout from "./login/Logout";
import QuestionView from "./question/QuestionView";
import AddQuestion from "./add-question/AddQueston";
import LeaderBoard from "./leader-board/LeaderBoard";
import { logoutUser } from "../actions/authedUser";
import QuestionAnswer from "./question/QuestionAnswer";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetInitialData());
  }

  logout = () => {
    this.props.dispatch(logoutUser());
  };

  render() {
    const { loading, authedUser } = this.props;
    return (
      <div className="container-grid main-layout">
        <Router>
          <Heading />
          <Nav />
          <main className="container-grid layout-section main">
            {loading ? null : (
              !!authedUser ?
                <Fragment>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/question-view/:id" component={QuestionView} />
                  <Route path="/question-answer/:id" component={QuestionAnswer} />
                  <Route path="/add-question" component={AddQuestion} />
                  <Route path="/leader-board" component={LeaderBoard} />
                </Fragment>
                :
                <Route path="/" component={Login} />
            )}
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ loading, authedUser }) {
  return {
    loading,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
