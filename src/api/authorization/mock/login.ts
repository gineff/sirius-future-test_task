import type { AuthorizationModel } from '../types';

const loginData: AuthorizationModel = {
  refresh: 'exampleTokenRefresh',
  access: 'exampleTokenAccessKey',
};

export default Promise.resolve(() => loginData);
