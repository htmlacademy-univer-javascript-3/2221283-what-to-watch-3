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
  Promo = '/promo',
  Favorite = '/favorite/',
  CheckFavorite = '/favorite/{filmId}/{status}',
  Comments = '/comments/',
  AddComment = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}
