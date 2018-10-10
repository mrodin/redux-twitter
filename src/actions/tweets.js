import { saveLikeToggle } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

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