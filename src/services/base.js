import axios from 'axios';
import { Notification } from 'element-ui';
import authHelper from '../utils/authHelper';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use(
  config => {
    const { token } = authHelper.getAuthState();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    throw error;
  }
);

instance.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    const { response } = error;
    if (response && response.status === 401) {
      Notification.error({
        title: '权限错误',
        message: '权限错误或登录超时，需要重新登录',
      });
    }
    if (response && response.status >= 500) {
      Notification.error({
        title: '服务器错误!',
        message: error.response.data.message,
      });
    }
    throw error;
  }
);
export default instance;
