import { describe, expect, it } from 'vitest';
import { FilmData } from '../../../types/state.ts';
import { dataProcess, filterByGenre, showFilms } from './data-process.ts';
import { VIDEO_MOCK, smallFilms } from '../../../utils/films.ts';
import { SmallFilmProps } from '../../../types/types.tsx';

describe('DataProcessSlice', () => {
  const initialState: FilmData = {
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
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = dataProcess.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = dataProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should put from allLoadedFilms to allFilmsByGenre filtered by genre with "filterByGenre" action', () => {
    const allLoadedFilms = smallFilms;
    const initialStateWithLoadedFilms = {...initialState, allLoadedFilms};

    const genre = 'Comedy';
    const allFilmsByGenre:SmallFilmProps[] = [
      {
        id: '1ss2312adsa14',
        name: 'What We Do in the Shadows',
        previewImage: 'img/what-we-do-in-the-shadows.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Comedy'
      },
      {
        id: '12312adsa114',
        name: 'The Darjeeling Limited',
        previewImage: 'img/dardjeeling-limited.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Comedy'
      },
      {
        id: '12312adsa1fds4',
        name: 'Johnny English',
        previewImage: 'img/johnny-english.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Comedy'
      },];

    const expectedState = { ...initialState, allFilmsByGenre, genre, allLoadedFilms};
    const result = dataProcess.reducer(initialStateWithLoadedFilms, filterByGenre(genre));
    expect(result).toEqual(expectedState);
  });

  it('should add 8 films in showedFilms by "showFilms" from allFilmsByGenre action', () => {
    const allLoadedFilms = smallFilms;
    const allFilmsByGenre = smallFilms;
    const showedFilms: SmallFilmProps[] = [
      {
        id: '12312adsa14',
        name: 'The Grand Budapest Hotel',
        previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Drama',
      },
      {
        id: '12312ads123a14',
        name: 'Fantastic Beasts: The Crimes of Grindelwald',
        previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Kids & Family'
      },
      {
        id: '1231sads2adsa14',
        name: 'Bohemian Rhapsody',
        previewImage: 'img/bohemian-rhapsody.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Documentary'
      },
      {
        id: '12asdss312adsa14',
        name: 'Macbeth',
        previewImage: 'img/macbeth.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Drama'
      },
      {
        id: '1112312adsa14',
        name: 'Aviator',
        previewImage: 'img/aviator.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Drama'
      },
      {
        id: '1as2312adsa14',
        name: 'We need to talk about Kevin',
        previewImage: 'img/we-need-to-talk-about-kevin.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Thriller'
      },
      {
        id: '1ss2312adsa14',
        name: 'What We Do in the Shadows',
        previewImage: 'img/what-we-do-in-the-shadows.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Comedy'
      },
      {
        id: '12312aadsa14',
        name: 'Revenant',
        previewImage: 'img/revenant.jpg',
        previewVideoLink: VIDEO_MOCK,
        genre: 'Thriller'
      }
    ];
    const shownFilmsCount = 8;
    const expectedState = {...initialState, allFilmsByGenre, showedFilms, shownFilmsCount, allLoadedFilms};
    const allFilmsByGenreAndLoadedFilmsInitialState = {...initialState, allFilmsByGenre, allLoadedFilms};

    const result = dataProcess.reducer(allFilmsByGenreAndLoadedFilmsInitialState, showFilms());

    expect(result).toEqual(expectedState);
  });
});
