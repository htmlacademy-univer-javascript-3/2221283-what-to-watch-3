import { Action } from 'redux';
import { createApi } from '../redux/services/api';
import { State } from '../types/state';
import { ThunkDispatch } from 'redux-thunk';
import { AuthStatus } from '../const';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  USER: {
    authorizationStatus: AuthStatus.NoAuth,
    user: null,
    signInError: false
  },
  DATA: {
    heroFilm: null,
    heroFilmLoadError: false,
    isHeroFilmLoading: false,
    allLoadedFilms: [],
    isFilmsLoading: false,
    filmsLoadError: false,
    loadedFilm: null,
    isFilmLoading: false,
    filmLoadError: false,
    allFilmsByGenre: [],
    genre: '',
    reviews: [],
    isReviewsLoading: false,
    ReviewsLoadError: false,
    similarFilms: [],
    similarFilmsLoadError: false,
    isSimilarFilmsLoading: false,
    myList: [],
    isMyListLoading: false,
    MyListLoadError: false,
    showedFilms: [],
    shownFilmsCount: 0
  },
  ...initialState ?? {},
});
