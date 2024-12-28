import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { axiosInstance } from '../axios.instance';
import { LOCAL_STORAGE_ACCESS_KEY } from '@/shared/constants';

// SET TOKEN TO HEADER AUTHORIZATION
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_KEY);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// REFRESH REQUEST IF TOKEN HAS EXPIRED
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async (error: AxiosError) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      try {
        // const refreshTokenFromStorage = localStorage.getItem(LOCAL_STORAGE_REFRESH_KEY);
        // const { accessToken, refreshToken } = await AuthService.refresh(refreshTokenFromStorage);
        // LocalStorageService.setTokens(accessToken, refreshToken);
        // axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // return await client(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (status === 403 && error?.response?.data) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  },
);
