export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyListEnum = '/mylist',
  Films = '/films/:id',
  AddReviewEnum = '/films/:id/review',
  PlayerEnum = '/player/:id',
  NotFound = '*'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const enum Genres {
  All = 'All',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance ='Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller'
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/',
  Promo = '/promo',
  Favorite = '/favorite/',
  SetFilmStatus = '/favorite/',
  Comments = '/comments/',
  AddComment = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum FilmStatus {
  Viewed = 0,
  ToView = 1,
}

export const genres = ['All', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thriller'] as const;
