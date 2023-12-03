import { store } from '../redux/store';
import { AuthStatus } from '../const';
import { FilmProps, HeroProps, ReviewProps, SmallFilmProps } from './types';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthStatus;
  user: UserData | null;
  signInError: boolean;
};

export type FilmData = {
  heroFilm: HeroProps | null;
  heroFilmLoadError: boolean;
  isHeroFilmLoading: boolean;

  allLoadedFilms: SmallFilmProps[];
  isFilmsLoading: boolean;
  filmsLoadError: boolean;

  loadedFilm: FilmProps | null;
  isFilmLoading: boolean;
  filmLoadError: boolean;

  allFilmsByGenre: SmallFilmProps[];
  genre: string;

  reviews: ReviewProps[];
  isReviewsLoading: boolean;
  ReviewsLoadError: boolean;

  similarFilms: SmallFilmProps[];
  similarFilmsLoadError: boolean;
  isSimilarFilmsLoading: boolean;

  myList: SmallFilmProps[];
  isMyListLoading: boolean;
  MyListLoadError: boolean;

  showedFilms: SmallFilmProps[];
  shownFilmsCount: number;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
