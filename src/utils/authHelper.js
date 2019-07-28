/**
 * Created by morenyang on 2019-07-27.
 */
const AUTH_TOKEN_KEY = 'DO_NOT_MODIFY_THIS_PARKING_LOT_TOKEN';

function setToken(tokenData) {
  localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(tokenData));
}

function clearToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

function getAuthState() {
  let token = null,
    rawToken;
  if ((rawToken = localStorage.getItem(AUTH_TOKEN_KEY))) {
    token = JSON.parse(rawToken);
  }
  return {
    token,
  };
}

export default { setToken, clearToken, getAuthState };
