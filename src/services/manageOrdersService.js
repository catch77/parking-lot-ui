import instance from './base';

export const fetchOrdersByPage= page =>{
    return instance.get(`/orders?page=${page - 1}`)
};
