import { createAction } from '@reduxjs/toolkit';
import { SmallFilmProps } from '../../types/types';
import { AuthStatus } from '../../const';

export const changeGenre = createAction('filterByGenre', (genre:string) => ({
  payload: genre,
}));

export const getFilms = createAction('showFilms');

export const loadFilms = createAction<SmallFilmProps[]>('loadFilms');

export const requireAuthorization = createAction<AuthStatus>('require');

export const setError = createAction<string | null>('setError');

export const setFilmsLoadingStatus = createAction<boolean>('setLoadingStatus');
