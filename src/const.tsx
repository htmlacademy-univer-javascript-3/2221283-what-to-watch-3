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

export enum APIRoute {
  Films = '/wtw/films',
  Film = '/wtw/films/{filmId}',
  SimilarFilms = '/wtw/films/{filmId}/similar',
  Promo = '/wtw/promo',
  Favorite = '/wtw/favorite',
  CheckFavorite = '/wtw/favorite/{filmId}/{status}',
  Comments = '/wtw/comments/{filmId}',
  AddComment = '/wtw/comments/{filmId}',
  Login = '/wtw/login',
  Logout = '/wtw/logout',
}
