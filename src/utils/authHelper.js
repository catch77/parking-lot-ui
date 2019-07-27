/**
 * Created by morenyang on 2019-07-27.
 */
import moment from 'moment';

const AUTH_TOKEN_KEY = 'DO_NOT_MODIFY_THIS_PARKING_LOT_TOKEN';

function setToken(tokenData) {
  tokenData.expire = moment()
    .add(tokenData.expires_in, 'second')
    .toDate();
  localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(tokenData));
}

function clearToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

function getAuthState() {
  let token = null,
    auth;
  if ((auth = localStorage.getItem(AUTH_TOKEN_KEY))) {
    token = JSON.parse(auth);
    if (token !== undefined && token.hasOwnProperty('expire')) {
      token.expire = moment(token.expire).toDate();
    }
  }
  return {
    token,
  };
}

function isExpired(tokenData) {
  if (!tokenData || !tokenData.expire) return true;
  const current = moment();
  return current.isAfter(moment(tokenData.expire).subtract(1, 'minute'));
}

export default { setToken, clearToken, getAuthState, isExpired };
