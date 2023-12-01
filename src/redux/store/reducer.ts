import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms, loadFilms, changeAuth, setError, setFilmsLoadingStatus, loadFilm, setFilmLoadingStatus, setValidationError } from './action';
import { SmallFilmProps, FilmProps } from '../../types/types';
import { AuthStatus } from '../../const';

type initialStateProps = {
  genre: string;
  films: SmallFilmProps[];
  showedFilms: SmallFilmProps[];
  shownFilmsCount: number;
  loadFilms: SmallFilmProps[];
  authorizationStatus: AuthStatus;
  error: string | null;
  isFilmsLoading: boolean;
  loadFilm: FilmProps | null;
  isFilmLoading: boolean;
  isSigninError: boolean;
}

const initialState:initialStateProps = {
  genre: 'All',
  films: [],
  loadFilms: [],
  showedFilms: [],
  shownFilmsCount: 0,
  authorizationStatus: AuthStatus.Unknown,
  error: null,
  isFilmsLoading: false,
  loadFilm: null,
  isFilmLoading: false,
  isSigninError: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.shownFilmsCount = 0;
      state.films = [];
      state.showedFilms = [];
      if (state.genre === 'All'){
        state.films = state.loadFilms;
      } else{
        state.loadFilms.forEach((film) => {
          if (film.genre === state.genre) {
            state.films.push(film);
          }
        });
      }
    })
    .addCase(getFilms, (state) => {
      let i = 0;
      while (i < 8){
        if (state.shownFilmsCount === state.films.length) {
          break;
        }
        state.showedFilms.push(state.films[state.shownFilmsCount]);
        state.shownFilmsCount++;
        i++;
      }
    })
    .addCase(loadFilms, (state, action) => {
      state.loadFilms = action.payload;
    })
    .addCase(changeAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setFilmLoadingStatus, (state, action) => {
      state.isFilmLoading = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.loadFilm = action.payload;
    })
    .addCase(setValidationError, (state, action) => {
      state.isSigninError = action.payload;
    });
});

export {reducer};
