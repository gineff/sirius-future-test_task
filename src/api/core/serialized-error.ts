import { GENERAL_ERROR } from '@/utils/constants';
import type { SerializedErrorType } from './types';

export class SerializedError {
  code?: SerializedErrorType['code'];
  customErrorCode?: number 
  messages?: SerializedErrorType['messages'];

  constructor({ code, customErrorCode, messages }: SerializedErrorType) {
    this.code = code;
    this.customErrorCode = customErrorCode;
    this.messages = messages ?? [GENERAL_ERROR];
  }
}
