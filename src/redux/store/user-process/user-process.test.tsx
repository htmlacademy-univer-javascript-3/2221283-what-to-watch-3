import { describe, expect, it } from 'vitest';
import { AuthStatus } from '../../../const';
import { UserProcess } from '../../../types/state';
import { userProcess } from './user-process';


describe('UserProcessSlice', () => {
  const initialState: UserProcess = {
    authorizationStatus: AuthStatus.Unknown,
    user: null,
    signInError: false,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = userProcess.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = userProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });
});
