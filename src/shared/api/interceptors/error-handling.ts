import axios, { AxiosError, AxiosResponse } from 'axios';
import { axiosInstance } from '../axios.instance';

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      console.error('Axios error: ', error.message);
    }
    return Promise.reject(error);
  },
);
