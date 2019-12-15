import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import LoadingBar from "react-redux-loading-bar";
import './Heading.css';
import headerImage from "../../assets/would-you-rather.jpeg";
import { userWithStats } from "../../utils/helpers";

class Heading extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Fragment>
        <LoadingBar className='loading-bar'/>
        <header className="container-grid layout-section header">
          <div>
            <img className='lo  go' alt='Would You Rather?' src={headerImage}/>
          </div>
          {!!currentUser &&
            <Fragment>
              <div className='user-name'>
                <div>
                {currentUser.name}
                </div>
                <div>
                  has {currentUser.score} points!
                </div>

              </div>

              <div className='user-image'>
                <img alt={currentUser.name} src={currentUser.avatarURL}/>
              </div>
            </Fragment>
          }
        </header>
      </Fragment>
    )
  }
}
const mapStateToProps = ({ users, authedUser}) => {
  return ({
    currentUser: !!authedUser ? userWithStats(users[authedUser]) : null
  });
}

export default connect(mapStateToProps)(Heading);
