import { RECEIVE_TWEETS, TOGGLE_LIKE } from '../actions/tweets';

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      }
    case TOGGLE_LIKE:
      const { id, hasLiked, authedUser } = action;
      const tweet = state[id];

      return {
        ...state,
        [action.id]: {
          ...tweet,
          likes: hasLiked
            ? tweet.likes.filter(user => user !== authedUser)
            : tweet.likes.concat(authedUser)
        }
      }
    default:
      return state;
  }
}