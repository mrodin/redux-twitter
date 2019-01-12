import React from 'react';
import Avatar from './Avatar';
import { MdFavorite, MdFavoriteBorder, MdReply } from 'react-icons/md';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';
import { handleToggleLike } from '../actions/tweets';

const Tweet = (props) => {
  const { uid, name, avatar, timestamp, text, hasLiked } = props.tweet;

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { dispatch, tweet, authedUser } = props;

    dispatch(handleToggleLike({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }));
  }

  return (
    <div className='tweet flex'>
      <Avatar avatarUrl={avatar} />
      <div className='tweet__body'>
        <ul className='flex'>
          <li className='tweet__username'>{name}</li>
          <div className='tweet__info flex'>
            <li>@{uid}</li>
            <li>· {formatDate(timestamp)}</li>
          </div>
        </ul>
        <div className='mt--xs'>{text}</div>
        <div className='mt--s flex'>
          <div className='tweet__control flex'>
            <button className='tweet__button' onClick={handleLike}>
              {hasLiked
                ? <MdFavorite style={tweet__icon} color='#eaa0a2' />
                : <MdFavoriteBorder style={tweet__icon} color='#aaaaaa' />}
            </button>
            <div className='tweet__counter'>{props.tweet.likes}</div>
          </div>
          <div className='tweet__control flex'>
            <MdReply style={tweet__icon} color='#aaaaaa' />
            <div className='tweet__counter'>{props.tweet.replies}</div>
          </div>
        </div>
      </div>
    </div>
  )
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
  height: 24,
  width: 24
};

export default connect(mapStateToProps)(Tweet);