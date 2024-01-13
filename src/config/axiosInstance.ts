import axios from 'axios';
import appQueryClient from './appQueryClient';

const axiosInstance = axios.create({
  baseURL: 'https://aw2zxe2ua5.execute-api.us-east-1.amazonaws.com/',
  withCredentials: true,
});
axiosInstance.interceptors.request.use(config => {
  const jwt = appQueryClient.getQueryData(['jwt']);

  config.headers.set('Accept-Language', 'ar');
  if (jwt) {
    config.headers.token(`${jwt}`);
  }
  return config;
});
export default axiosInstance;
