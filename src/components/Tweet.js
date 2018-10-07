import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';

class Tweet extends Component {
  render() {
    const { name, avatar, timestamp, text } = this.props.tweet;

    return (
      <div className='tweet flex'>
        <div>
          <img src={avatar} className='tweet__avatar' alt="Author's avatar" />
        </div>
        <div className='tweet__header'>
          <ul>
            <li className='tweet__username'>{name}</li>
            <li>{formatDate(timestamp)}</li>
            <li>{text}</li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet);