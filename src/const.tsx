export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyListEnum = '/mylist',
  Films = '/films/:id',
  AddReviewEnum = '/films/:id/review',
  PlayerEnum = '/player/:id'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Films = '/films',
  Film = '/films/',
  SimilarFilms = '/films/{filmId}/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  CheckFavorite = '/favorite/{filmId}/{status}',
  Comments = '/comments/{filmId}',
  AddComment = '/comments/{filmId}',
  Login = '/login',
  Logout = '/logout',
}
