import { createSelector } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../../const';
import { State, UserProcess } from '../../../types/state';

export const getAuthStatus = createSelector(
  (state: State) => state[NameSpace.User],
  (state: UserProcess) => state.authorizationStatus,
);
export const getUserData = createSelector(
  (state: State) => state[NameSpace.User],
  (state: UserProcess) => state.user,
);
export const getAuthCheckedStatus = createSelector(
  (state: State) => state[NameSpace.User],
  (state: UserProcess) => state.authorizationStatus !== AuthStatus.Unknown,
);
export const getSignInError = createSelector(
  (state: State) => state[NameSpace.User],
  (state: UserProcess) => state.signInError,
);
