import request from './base';

export const fetchCurrentParkingboy = () => {
  return request.get(`/parkingboys/me`);
};

export const fetchParkingboyByParkingboyname = username => {
  return request.get(`/parkingboys/${username}`);
};

