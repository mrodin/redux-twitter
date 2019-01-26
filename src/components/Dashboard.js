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
              <Tweet />
            </ParentTweet>
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps({ tweets }) {
  const parentTweets = Object.keys(tweets).filter((tweet) => tweets[tweet].replyingTo === null);
    
  return {
    tweetIds: parentTweets.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);