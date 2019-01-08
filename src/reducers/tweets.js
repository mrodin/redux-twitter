import {
  RECEIVE_TWEETS,
  ADD_TWEET,
  TOGGLE_LIKE
} from '../actions/tweets';

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      }
    case ADD_TWEET:
      const { tweet } = action

      let replyingTo = {}
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id])
          }
        }
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      }
    case TOGGLE_LIKE:
      const { id, hasLiked, authedUser } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          likes: hasLiked
            ? state[id].likes.filter(user => user !== authedUser)
            : state[id].likes.concat(authedUser)
        }
      }
    default:
      return state;
  }
}