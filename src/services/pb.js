import instance from './base';

export const fetchAllPb = () => {
  return instance.get('/parking-boys');
};

export const addPb = Pb => {
  return instance.post('/parking-boys', Pb);
};

export const updatePb = Pb => {
  return instance.put(`/parking-boys`, Pb);
};

export const deletePb = PbId => {
  return instance.delete(`/parking-boys/${PbId}`);
};

export const fetchPbBypage = (page) => {
  return instance.get(`/parking-boys?page=${page - 1}`);
};

export const updateParkingBoyParkingLot = (parkingBoy) => {
  return instance.put(`/parking-boys/${parkingBoy.id}/parking-lots`, parkingBoy.parkingLotList);
};
