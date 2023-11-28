import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms } from './action';
import { SmallFilmProps } from '../types/types';
import { smallFilms } from '../mocks/films';

type initialStateProps = {
  genre: string;
  films: SmallFilmProps[];
  showedFilms: SmallFilmProps[];
  shownFilmsCount: number;
}

const initialState:initialStateProps = {
  genre: 'All',
  films: smallFilms,
  showedFilms: [],
  shownFilmsCount: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.shownFilmsCount = 0;
      state.films = [];
      state.showedFilms = [];
      if (state.genre === 'All'){
        state.films = smallFilms;
      } else{
        smallFilms.forEach((film) => {
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
    });
});

export {reducer};
