import instance from './base';

export const fetchHrListByPage = page => {
  return instance.get(`/hrs?page=${page - 1}`);
};

