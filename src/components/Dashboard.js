import React from 'react'
import { connect } from 'react-redux';
import NewTweet from './NewTweet';
import Tweet from './Tweet';

const Dashboard = (props) => {
  const { tweetIds } = props;

  return (
    <div className='dashboard-container'>
      <NewTweet />
      <ul>
        {tweetIds.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets)
      .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);