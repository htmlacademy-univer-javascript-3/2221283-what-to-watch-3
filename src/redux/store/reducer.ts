import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms, loadFilms, changeAuth, setError, setFilmsLoadingStatus, loadFilm, setFilmLoadingStatus, setValidationError,
  loadHeroFilm, loadSimularFilms, loadReviews, saveUser } from './action';
import { SmallFilmProps, FilmProps, HeroProps, ReviewProps } from '../../types/types';
import { AuthStatus } from '../../const';
import { UserData } from '../../types/user-data';

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
  heroFilm: HeroProps | null;
  similarFilms: SmallFilmProps[] | null;
  reviews: ReviewProps[];
  user: UserData | null;
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
  isSigninError: false,
  similarFilms: [],
  reviews: [],
  user: null,
  heroFilm: null,
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
    })
    .addCase(loadHeroFilm, (state, action) => {
      state.heroFilm = action.payload;
    })
    .addCase(loadSimularFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.showedFilms = state.similarFilms;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(saveUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
