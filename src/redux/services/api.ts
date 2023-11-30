import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://13.design.pages.academy';
const TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  api.interceptors.response.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );
  return api;
};
