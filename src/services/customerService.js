import request from './base';


export const fetchCurrentCustomer = () => {
  return request.get(`/customers/me`);
};

export const fetchCustomerByCustomername = username => {
  return request.get(`/customers/${username}`);
};
export const customerRegister = user => {
    return request.post('/customers', user);
  };