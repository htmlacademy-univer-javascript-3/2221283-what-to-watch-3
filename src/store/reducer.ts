import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms } from './action';
import { FilmsProps } from '../types/types';
import { films } from '../mocks/films';
import { Genre } from '../types/genre';

const initialState: {genre: Genre; films: FilmsProps[]} = {
  genre: 'All genres',
  films: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.films = films;
    });
});
