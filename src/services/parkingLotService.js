import instance from './base';

export const fetchAllPl = () => {
  return instance.get('/parking-lots');
};

export const fetchParklotByPage = (page) => {
  return instance.get(`/parking-lots?page=${page - 1}`);
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
