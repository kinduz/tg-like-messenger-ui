import { AxiosRequestConfig } from 'axios';
import { BaseService } from './base-service';

type TStartLoginByPhoneNumberBody = {
  phoneNumber: string;
};

type TSendOtpBody = TStartLoginByPhoneNumberBody & {
  otp: string;
};

export class AuthService extends BaseService {
  protected url = '/auth';

  async startLoginByPhoneNumber(data: TStartLoginByPhoneNumberBody, config?: AxiosRequestConfig) {
    return super.post(`${this.url}/start-login-by-phone-number`, data, config);
  }

  async sendOtp(data: TSendOtpBody, config?: AxiosRequestConfig) {
    return super.post(`${this.url}/send-otp`, data, config);
  }
}

export const authService = new AuthService();
