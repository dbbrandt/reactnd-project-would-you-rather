import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import LoadingBar from "react-redux-loading";
import './Heading.css';
import headerImage from "../../assets/would-you-rather.jpeg";

class Heading extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <Fragment>
        <LoadingBar className='loading-bar'/>
        <header className="container-grid layout-section header">
          <div>
            <img className='logo' alt='Would You Rather?' src={headerImage}/>
          </div>
          {!!authedUser &&
            <Fragment>
              <div className='user-name'>
                {authedUser.name}
              </div>
              <div className='user-image'>
                <img alt={authedUser.name} src={authedUser.avatarURL}/>
              </div>
            </Fragment>
          }
        </header>
      </Fragment>
    )
  }
}

export default connect(({ authedUser }) => ({ authedUser }))(Heading);
