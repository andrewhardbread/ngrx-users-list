import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../states/user.state';

export const getUsers = createSelector(
  createFeatureSelector('UserStore'),
  (state: UserState) => state.users
);
