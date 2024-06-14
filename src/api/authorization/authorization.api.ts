import { BaseApi, publicApi } from '../core';
import type {
  AuthorizationModel,
  LoginFormData,
  RefreshTokenData,
  RegistrationFormData,
  RegistrationModel,
  VerifyTokenData,
} from './types';

const SERVICE_URL = '';

class AuthorizationApi extends BaseApi {
  login = (loginData: LoginFormData) =>
    this.createRequest<AuthorizationModel>({
      request: () => publicApi.post(`${SERVICE_URL}/login`, loginData),
      mock: () => import('./mock/login'),
    });

  register = (registrationData: RegistrationFormData) =>
    this.createRequest<RegistrationModel>({
      request: () => publicApi.post(`${SERVICE_URL}/register`, registrationData),
      mock: () => import('./mock/registration'),
    });

  verifyToken = (verifyTokenData: VerifyTokenData) =>
    this.createRequest({
      request: () =>
        publicApi.post(`${SERVICE_URL}/jwt/verify/`, verifyTokenData),
    });

  refreshToken = (refreshTokenData: RefreshTokenData) =>
    this.createRequest<AuthorizationModel>({
      request: () =>
        publicApi.post(`${SERVICE_URL}/jwt/refresh/`, refreshTokenData),
      mock: () => import('./mock/login'),
    });
}

export const authorizationApi = new AuthorizationApi();
