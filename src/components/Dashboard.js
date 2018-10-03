import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props;

    return (
      <Fragment>
        <ul className='dashboard-container'>
          {tweetIds.map((id) => (
            <li key={id} className='tweet'>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets)
      .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);