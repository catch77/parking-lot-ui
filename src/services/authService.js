/**
 * Created by morenyang on 2019-07-28.
 */

import request from './base';

export const login = user => {
  return request.post('/users/login', user);
};

export const fetchPrincipal = () => {
  return request.get('/user/me');
};
