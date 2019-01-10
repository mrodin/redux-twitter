import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_USER = 'doc_mcdoggins';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_USER));
        dispatch(hideLoading());
      })
  }
}