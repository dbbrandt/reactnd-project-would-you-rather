import React, { Component} from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleGetInitialData } from "./../actions/shared";
import "./App.css";
import Nav from "./nav/Nav";
import Heading from "./heading/Heading";
import Footer from "./footer/Footer";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Logout from "./login/Logout";
import QuestionView from "./question/QuestionView";
import QuestionAdd from "./question/QuestonAdd";
import LeaderBoard from "./leader-board/LeaderBoard";
import QuestionAnswer from "./question/QuestionAnswer";
import NotFound from "./login/NotFound";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetInitialData());
  }

  render() {
    const { loading, authedUser } = this.props;
    return (
      <div className="container-grid main-layout">
        <Router>
          <Heading />
          <Nav />
          <main className="container-grid layout-section main">
            {loading ? null : !!authedUser ? (
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/view/:id" component={QuestionView} />
                <Route path="/answer/:id" component={QuestionAnswer} />
                <Route path="/add" component={QuestionAdd} />
                <Route path="/leader-board" component={LeaderBoard} />
                <Route path="*" component={NotFound}/>
              </Switch>
            ) : (
              <Route path="/" component={Login} />
            )}
          </main>
          <Footer/>
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
