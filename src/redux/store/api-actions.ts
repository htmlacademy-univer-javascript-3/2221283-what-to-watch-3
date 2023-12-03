import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { redirectToRoute } from './action';
import { FilmProps, HeroProps, ReviewProps, SmallFilmProps } from '../../types/types';
import { APIRoute, AppRoute } from '../../const';
import { saveToken, dropToken, getToken } from '../services/token';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { ReviewData } from '../../types/review-data';

export const fetchFilms = createAsyncThunk<SmallFilmProps[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<SmallFilmProps[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<FilmProps, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmProps>(`${APIRoute.Film}${id}`);
    return data;
  },
);

export const fetchHeroFilm = createAsyncThunk<HeroProps, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchHeroFilm',
  async (_arg, {extra: api}) => {
    const headers = {
      'x-token': getToken(),
    };
    const {data} = await api.get<HeroProps>(APIRoute.Promo,{headers});
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<SmallFilmProps[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<SmallFilmProps[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<ReviewProps[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchReviews',
  async (id, { extra: api}) => {
    const {data} = await api.get<ReviewProps[]>(`${APIRoute.Comments}${id}`);
    return data;
  },
);

export const sendReview = createAsyncThunk<void, ReviewData, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/sendReview',
  async ({comment, rating, id}, {extra: api}) => {
    const data = {
      'comment':comment,
      'rating':rating,
    };
    const headers = {
      'x-token': getToken(),
    };
    await api.post(`${APIRoute.AddComment}${id}`, data, {headers});
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'USER/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'USER/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'USER/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
