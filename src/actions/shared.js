import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';

const AUTHED_USER = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users }) => {
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_USER));
      })
  }
}