import { BaseService } from './base-service';

type TStartLoginByPhoneNumberBody = {
  phoneNumber: string;
};

export class AuthService extends BaseService {
  protected url = '/auth';

  async startLoginByPhoneNumber(data: TStartLoginByPhoneNumberBody) {
    return super.post(`${this.url}/start-login`, data);
  }
}

export const authService = new AuthService();
