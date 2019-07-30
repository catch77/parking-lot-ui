import instance from './base';

export const fetchHrListByPage = page => {
  return instance.get(`/hrs?page=${page - 1}`);
};

export const addHr = Hr => {
  return instance.post(`/hrs`,Hr);
};

export const updateHr = Hr => {
  return instance.put(`/hrs`,Hr);
};

export const deleteHr = HrId => {
  return instance.delete(`/hrs/${HrId}`);
};
