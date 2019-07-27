import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
});

instance.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    throw error;
  }
);
