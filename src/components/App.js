import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import TweetDetail from './TweetDetail';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className='app-container flex flex--center'>
          {this.props.loading === true
            ? null
            // : <TweetDetail id='8xf0y6ziyjabvozdd253nd' /> 
            : <Dashboard />
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);