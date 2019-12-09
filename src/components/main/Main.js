import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import AddQuestion from "../add-question/AddQueston";
import LeaderBoard from "../leader-board/LeaderBoard";
import Question from "../question/Question";
import "./Main.css";

class Main extends Component {
  render() {
    const { loading } = this.props;
    return (
      <main className="container-grid layout-section main">
        {loading ? null : (
          <Fragment>
            <Router>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/login' component={Login}/>
              <Route path='/question' component={Question} />
              <Route path='/add-question' component={AddQuestion} />
              <Route path='/leader-board' component={LeaderBoard} />
            </Router>
          </Fragment>
        )}
      </main>
    );
  }
}

export default Main;
