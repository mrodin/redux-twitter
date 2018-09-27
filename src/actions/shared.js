import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';

const AUTHED_USER = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_USER));
      })
  }
}