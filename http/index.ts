import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

const $host = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = localStorage.getItem('AccessToken');
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
