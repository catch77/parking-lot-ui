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

export const fetchFetchableOrderList = (customerId) => {
  return request.get(`/user-orders/${customerId}/fetchable`);
};

export const customerFetchCar = (orderId) => {
  return request.post(`/orders/fetch/${orderId}`);
};

export const fetchById = (orderId) => {
  return request.get(`/orders/${orderId}`);
};
