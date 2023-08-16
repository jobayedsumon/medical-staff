import axios from 'axios';

const defaultOptions = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);
export default instance;
