/** Получение env-переменной */
const getEnvVar = (key: string) => import.meta.env[key] || '';


/** Режим разработки */
export const isDevEnv = import.meta.env.DEV;

/** Режим продакшена */
export const isProdEnv = import.meta.env.PROD;

/** Режим мокинга данных */
export const isMockEnv = isDevEnv && getEnvVar('MOCK') === 'true';


/** Урлы бекенда */
export const BACKEND_ORIGIN = getEnvVar('BACKEND_ORIGIN');
export const BACKEND_API = `${BACKEND_ORIGIN}/api/v1`;
