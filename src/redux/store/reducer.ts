import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms, loadFilms, requireAuthorization, setError, setFilmsLoadingStatus } from './action';
import { SmallFilmProps } from '../../types/types';
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
}

const initialState:initialStateProps = {
  genre: 'All',
  films: [],
  loadFilms: [],
  showedFilms: [],
  shownFilmsCount: 0,
  authorizationStatus: AuthStatus.Unknown,
  error: null,
  isFilmsLoading: false
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    });
});

export {reducer};
