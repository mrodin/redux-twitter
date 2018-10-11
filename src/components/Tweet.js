import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';
import { MdFavorite, MdFavoriteBorder, MdReply } from 'react-icons/md';
import { handleToggleLike } from '../actions/tweets';

class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault();

    const { dispatch, tweet, authedUser } = this.props;

    dispatch(handleToggleLike({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }));
  }

  render() {
    const { name, avatar, timestamp, text, hasLiked } = this.props.tweet;

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
            <button className='tweet__button' onClick={this.handleLike}>
              {hasLiked
                ? <MdFavorite style={tweet__icon} color='#eaa0a2' />
                : <MdFavoriteBorder style={tweet__icon} color='#aaaaaa' />}
            </button>
            <MdReply style={tweet__icon} color='#aaaaaa' />
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

const tweet__icon = {
  height: 28,
  width: 28,
  marginRight: 10
};

export default connect(mapStateToProps)(Tweet);