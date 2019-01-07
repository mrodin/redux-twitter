import React, { Component, Fragment } from 'react';
import Dashboard from './Dashboard';
import Modal from './Modal';
import ReactModal from 'react-modal';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

ReactModal.setAppElement('#root');

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
            : <Dashboard />
          }
        </div>
        <Modal />
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