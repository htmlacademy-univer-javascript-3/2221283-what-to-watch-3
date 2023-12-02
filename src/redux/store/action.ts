import { createAction } from '@reduxjs/toolkit';
import { SmallFilmProps, FilmProps, HeroProps, ReviewProps } from '../../types/types';
import { AuthStatus, AppRoute } from '../../const';
import { UserData } from '../../types/user-data';

export const changeGenre = createAction('filterByGenre', (genre:string) => ({
  payload: genre,
}));

export const getFilms = createAction('showFilms');

export const loadFilms = createAction<SmallFilmProps[]>('loadFilms');

export const changeAuth = createAction<AuthStatus>('changeAuth');

export const setError = createAction<string | null>('setError');

export const setFilmsLoadingStatus = createAction<boolean>('setLoadingStatus');

export const setFilmLoadingStatus = createAction<boolean>('setFilmLoading');

export const loadFilm = createAction<FilmProps>('loadFilm');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const setValidationError = createAction<boolean>('setValidationError');

export const loadHeroFilm = createAction<HeroProps>('loadHeroFilm');

export const loadSimularFilms = createAction<SmallFilmProps[]>('loadSimularFilms');

export const loadReviews = createAction<ReviewProps[]>('loadReviews');

export const saveUser = createAction<UserData>('saveUser');
