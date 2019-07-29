import instance from './base';

export const postCarNoAndUserName = (username, carNo) => {
  return instance.post(`/orders/${username}/car-no/${carNo}`);
};
