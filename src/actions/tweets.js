import { saveLikeToggle, saveTweet } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const ADD_TWEET = 'ADD_TWEET';


// Receive Tweets action
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

// Toggle like action
function toggleLike({ id, hasLiked, authedUser }) {
  return {
    type: TOGGLE_LIKE,
    id,
    hasLiked,
    authedUser
  }
}

export function handleToggleLike(data) {
  return (dispatch) => {
    dispatch(toggleLike(data));

    return saveLikeToggle(data)
      .catch((e) => {
        console.warn('Error in handleToggleLike: ', e);
        dispatch(toggleLike(data));
        alert('The was an error liking the tweet. Try again.');
      })
  }
}

// Add Tweet action
function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function handleAddTweet(tweet) {
  
}