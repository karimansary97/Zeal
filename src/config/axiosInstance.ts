import axios from 'axios';
import appQueryClient from './appQueryClient';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: Config.API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
  const jwt = appQueryClient.getQueryData(['Jwt']);
  if (jwt) {
    config.headers['Content-Type'] = 'application/json';
    config.headers.token = jwt;
  }

  return config;
});
export default axiosInstance;
