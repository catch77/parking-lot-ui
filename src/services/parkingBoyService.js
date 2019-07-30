import request from './base';

export const fetchCurrentParkingboy = () => {
  return request.get(`/parking-boys/me`);
};

export const fetchParkingboyByParkingboyname = username => {
  return request.get(`/parking-boys/${username}`);
};

