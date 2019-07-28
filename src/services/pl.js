import instance from './base';

export const fetchAllPl = () => {
  return instance.get('/parking-lots');
};

export const addPl = Pl => {
  return instance.post('/parking-lots', Pl);
};

export const updatePl = Pl => {
  return instance.put('/parking-lots', Pl);
};

export const deletePl = PlId => {
  return instance.delete(`/parking-lots/${PlId}`);
};
