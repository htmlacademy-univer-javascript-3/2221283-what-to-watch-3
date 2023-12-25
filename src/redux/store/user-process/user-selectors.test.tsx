import { describe, expect } from 'vitest';
import { AuthStatus, NameSpace } from '../../../const';
import { getAuthStatus, getUserData, getAuthCheckedStatus, getSignInError } from './user-selectors.ts';


describe('UserSelectors', () => {
  const state = {
    [NameSpace.Data]: {
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
      genre: 'All',

      reviews: [],
      isReviewsLoading: false,
      ReviewsLoadError: false,

      similarFilms: [],
      similarFilmsLoadError: false,
      isSimilarFilmsLoading: false,

      myList: [],
      MyListLoadError: false,
      isMyListLoading: false,

      showedFilms: [],
      shownFilmsCount: 0,
    },
    [NameSpace.User]: {
      authorizationStatus: AuthStatus.Unknown,
      user: null,
      signInError: false,
    },
  };

  it('should return auth status from state by "getAuthStatus" selector', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthStatus(state);
    expect(result).toEqual(authorizationStatus);
  });
  it('should user data from state by "getUserData" selector', () => {
    const { user } = state[NameSpace.User];
    const result = getUserData(state);
    expect(result).toEqual(user);
  });
  it('should check if user was checked for auth status from state by "getAuthCheckedStatus" selector', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthCheckedStatus(state);
    expect(result).toEqual(authorizationStatus !== AuthStatus.Unknown);
  });
  it('should check if log/sign In error was returned from state by "getSignInError" selector', () => {
    const { signInError } = state[NameSpace.User];
    const result = getSignInError(state);
    expect(result).toEqual(signInError);
  });
});
