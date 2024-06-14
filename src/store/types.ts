import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import type { AuthState } from './auth/types';
/*import type { CourseState } from './course/types';
import type { CoursesState } from './courses/types';
import type { ProfileState } from './profile/types';*/

export type AppState = {
  auth: AuthState;
  /*course: CourseState;
  courses: CoursesState;
  profile: ProfileState;*/
};

export type ThunkApiGetState = () => AppState;
export type ThunkApiDispatch = ThunkDispatch<unknown, unknown, Action>;

export type ApiThunkConfig = {
  state: AppState;
};
