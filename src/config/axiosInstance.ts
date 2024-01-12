import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://i7d1qkxdik.execute-api.us-east-1.amazonaws.com/',
  withCredentials: true,
});

export default axiosInstance;
