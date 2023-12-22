import { describe, expect } from 'vitest';
import { AuthStatus, NameSpace } from '../../../const';
import { getAllFilmsByGenre, getFilm, getFilms, getFilmsLoadStatus, getHeroFilm, getMyFilms, getReviews, getShowedFilms, getShowedFilmsCount, getSimilarFilms } from './data.selectors.ts';


describe('DataSelectors', () => {
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

  it('should return all films from state by "getFilms" selector', () => {
    const { allLoadedFilms } = state[NameSpace.Data];
    const result = getFilms(state);
    expect(result).toEqual(allLoadedFilms);
  });
  it('should return all films by genre from state by "getAllFilmsByGenre" selector', () => {
    const { allFilmsByGenre } = state[NameSpace.Data];
    const result = getAllFilmsByGenre(state);
    expect(result).toEqual(allFilmsByGenre);
  });
  it('should return films load status from state by "getFilmsLoadStatus" selector', () => {
    const { isFilmsLoading } = state[NameSpace.Data];
    const result = getFilmsLoadStatus(state);
    expect(result).toEqual(isFilmsLoading);
  });
  it('should return one film from state by "getFilm" selector', () => {
    const { loadedFilm } = state[NameSpace.Data];
    const result = getFilm(state);
    expect(result).toEqual(loadedFilm);
  });
  it('should return films to show from state by "getShowedFilms" selector', () => {
    const { showedFilms } = state[NameSpace.Data];
    const result = getShowedFilms(state);
    expect(result).toEqual(showedFilms);
  });
  it('should return count of showed films from state by "getShowedFilmsCount" selector', () => {
    const { shownFilmsCount } = state[NameSpace.Data];
    const result = getShowedFilmsCount(state);
    expect(result).toEqual(shownFilmsCount);
  });
  it('should return hero film from state by "getHeroFilm" selector', () => {
    const { heroFilm } = state[NameSpace.Data];
    const result = getHeroFilm(state);
    expect(result).toEqual(heroFilm);
  });
  it('should return reviews from state by "getReviews" selector', () => {
    const { reviews } = state[NameSpace.Data];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });
  it('should return similars films from state by "getSimilarFilms" selector', () => {
    const { similarFilms } = state[NameSpace.Data];
    const result = getSimilarFilms(state);
    expect(result).toEqual(similarFilms);
  });
  it('should return my list of films from state by "getMyFilms" selector', () => {
    const { myList } = state[NameSpace.Data];
    const result = getMyFilms(state);
    expect(result).toEqual(myList);
  });
});
