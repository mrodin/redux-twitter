import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdReply } from 'react-icons/md';

class Tweet extends Component {
  render() {
    const { name, avatar, timestamp, text } = this.props.tweet;

    return (
      <div className='tweet flex'>
        <div>
          <img src={avatar} className='tweet__avatar' alt="Author's avatar" />
        </div>
        <div className='tweet__body'>
          <ul>
            <li className='tweet__username'>{name}</li>
            <li>{formatDate(timestamp)}</li>
          </ul>
          <div className='mt--xs'>{text}</div>
          <div className='mt--s'>
            <MdFavoriteBorder style={iconStyle} />
            <MdReply style={iconStyle} />
          </div>
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

const iconStyle = {
  color: 'grey',
  height: 28,
  width: 28,
  marginRight: 10
};

export default connect(mapStateToProps)(Tweet);