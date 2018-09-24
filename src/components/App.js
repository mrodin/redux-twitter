import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(setAuthedUser('tylermcginnis'));
  }

  render() {   
    return (
      <div>
        Start Code
      </div>
    )
  }
}

export default connect()(App);