/* eslint-disable consistent-return */
import { AxiosError, AxiosRequestConfig } from 'axios';
import { axiosInstance } from '../axios.instance';

export abstract class BaseService {
  protected async get<TResponse>(url: string, config?: AxiosRequestConfig): Promise<TResponse> {
    try {
      const response = await axiosInstance.get<TResponse>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  protected async post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    try {
      const response = await axiosInstance.post<TResponse>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  protected async put<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    try {
      const response = await axiosInstance.put<TResponse>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  protected async delete<TResponse>(url: string, config?: AxiosRequestConfig): Promise<TResponse> {
    try {
      const response = await axiosInstance.delete<TResponse>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private handleError(error: unknown): never {
    const message = (error as AxiosError<{ message: string }>).response?.data?.message;
    console.log(message || 'An error occurred');
    throw error;
  }
}
