import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
  render() {
    const { avatar } = this.props.tweet;

    return (

      <div className='tweet flex'>
        <div>
          <img src={avatar} alt="Author's avatar" />
        </div>
        {/* <div>
          <ul>
            <li>{this.props.tweet.name}</li>
            <li>{this.props.tweet.timestamp}</li>
            <li>{this.props.tweet.text}</li>
          </ul>
        </div> */}
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