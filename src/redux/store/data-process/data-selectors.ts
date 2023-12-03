import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { FilmData, State } from '../../../types/state';

export const getFilms = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.allLoadedFilms,
);

export const getAllFilmsByGenre = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.allFilmsByGenre,
);

export const getFilmsLoadStatus = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.isFilmsLoading,
);

export const getFilm = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.loadedFilm,
);

export const getShowedFilms = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.showedFilms,
);

export const getShowedFilmsCount = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.shownFilmsCount,
);

export const getHeroFilm = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.heroFilm,
);

export const getReviews = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.reviews,
);

export const getSimilarFilms = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.similarFilms,
);

export const getMyFilms = createSelector(
  (state: State) => state[NameSpace.Data],
  (state: FilmData) => state.myList,
);
