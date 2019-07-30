import instance from './base';

export const fetchAllUl = () => {
  return instance.get('/customers');
};
export const fetchUlBypage = page => {
  return instance.get(`/customers?page=${page - 1}`);
};
