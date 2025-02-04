import request from './base';

export const fetchCurrentParkingboy = () => {
  return request.get(`/parking-boys/me`);
};

export const fetchParkingboyByParkingboyname = username => {
  return request.get(`/parking-boys/${username}`);
};

export const fetchParkingboyOrders = () => {
    return request.get(`/orders/parking-boys/orders`);
  };

export const fetchParkingboyByParkingboyId = (id) => {
    return request.put(`/parking-boys/${id}/parking-status`);
  };