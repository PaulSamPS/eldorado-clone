import axios from 'axios';
import { getCookie } from 'cookies-next';

const API_URL = 'http://localhost:5000/api/';

const $hostBasket = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const $host = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = getCookie('token');
  return config;
};

const basketCookieInterceptor = (config: any) => {
  config.headers.basket = getCookie('basket');
  return config;
};

$authHost.interceptors.request.use(authInterceptor);
$hostBasket.interceptors.request.use(basketCookieInterceptor);

export { $host, $authHost, $hostBasket };
