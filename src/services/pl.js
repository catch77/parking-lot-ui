import instance from './base';

export const fetchAllPl = () => {
  return instance.get('/parkingLots');
};

export const addPl = Pl => {
  return instance.post('/parkingLots', Pl);
};

export const updatePl = Pl => {
  return instance.put('/parkingLots', Pl);
};

export const deletePl = PlId => {
  return instance.delete('/parkingLots/${PlId}');
};
