import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Nav from "../nav/Nav";
import Heading from "../heading/Heading";
import Footer from "../footer/Footer";
import { handleGetInitialData } from "../../actions/shared";
import Dashboard from "../dashboard/Dashboard";
import Login from "../login/Login";
import Question from "../question/Question";
import AddQuestion from "../add-question/AddQueston";
import LeaderBoard from "../leader-board/LeaderBoard";
// import {handleAuthenticateUser} from "../../actions/authedUser";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="container-grid main-layout">
        <Router>
          <Heading />
          <Nav />
          <main className="container-grid layout-section main">
            {loading ? null : (
                <Fragment>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/question" component={Question} />
                  <Route path="/add-question" component={AddQuestion} />
                  <Route path="/leader-board" component={LeaderBoard} />
                  <Route path='/logout' render={() => (
                    <Login logout={true}/>
                    )}/>
                </Fragment>
            )}
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ loading }) {
  return {
    loading
  };
}

export default connect(mapStateToProps)(App);
