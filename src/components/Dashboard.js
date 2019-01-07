import React from 'react'
import { connect } from 'react-redux';
import NewTweet from './NewTweet';
import ParentTweet from './ParentTweet';
import Tweet from './Tweet';

const Dashboard = (props) => {
  const { tweetIds } = props;

  return (
    <div className='dashboard-container'>
      <NewTweet placeholderText="What's happening?" />
      <ul>
        {tweetIds.map((id) => (
          <li key={id}>
            <ParentTweet id={id}>
              <Tweet id={id} />
            </ParentTweet>
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