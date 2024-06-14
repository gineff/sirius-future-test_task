import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { isDevEnv } from '@/config';
import authReducer from './auth/slice';
/*import courseReducer from './courses/slice';
import coursesReducer from './courses/slice';
import profileReducer from './profile/slice';*/
import type { AppState } from './types';

export const store = configureStore({
  reducer: {
    /*course: courseReducer,
    courses: coursesReducer,
    profile: profileReducer,*/
    auth: authReducer,
  },
  devTools: isDevEnv,
});

export type AppDispatch = typeof store.dispatch;

/** Типизированный хук диспетчера, использовать его в компонентах. */
export const useAppDispatch: () => AppDispatch = useDispatch;

/** Типизированный хук селектора, использовать его в компонентах. */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
