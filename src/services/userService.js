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

export const fetchCurrentCustomer = () => {
  return request.get(`/customers/me`);
};

export const fetchCustomerByCustomername = username => {
  return request.get(`/customers/${username}`);
};