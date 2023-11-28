import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';

export const changeGenre = createAction<Genre>('genre/changeGenre');
export const getFilms = createAction('films/getFilms');
