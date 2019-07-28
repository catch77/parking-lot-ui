/**
 * Created by morenyang on 2019-07-28.
 */

import request from './base';

export const fetchCurrentUser = () => {
  return request.get(`/users/me`);
};

export const fetchUserByUsername = username => {
  return request.get(`/users/${username}`);
};
