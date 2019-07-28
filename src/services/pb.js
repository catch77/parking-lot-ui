import instance from './base';

export const fetchAllPb = () => {
  return instance.get('/parkingboys');
};

export const addPb = Pb => {
  return instance.post('/parkingboys', Pb);
};

export const updatePb = Pb => {
  return instance.put(`/parkingboys`, Pb);
};

export const deletePb = PbId => {
  return instance.delete(`/parkingboys/${PbId}`);
};
