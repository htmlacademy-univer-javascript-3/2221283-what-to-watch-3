import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('filterByGenre', (genre:string) => ({
  payload: genre,
}));

export const getFilms = createAction('showFilms');
