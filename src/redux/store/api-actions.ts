import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { loadFilms, setFilmsLoadingStatus, loadFilm, changeAuth, setError, setFilmLoadingStatus, redirectToRoute } from './action';
import { SmallFilmProps, FilmProps } from '../../types/types';
import { APIRoute, AppRoute, AuthStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { saveToken, dropToken, getToken } from '../services/token';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { store } from '.';


export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<SmallFilmProps[]>(APIRoute.Films);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilm',
  async (id, {dispatch, extra: api}) => {
    dispatch(setFilmLoadingStatus(true));
    const {data} = await api.get<FilmProps>(`${APIRoute.Film}${id}`);
    dispatch(setFilmLoadingStatus(false));
    dispatch(loadFilm(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(changeAuth(AuthStatus.Auth));
    } catch {
      dispatch(changeAuth(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(changeAuth(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));


  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    const headers = {
      'x-token': getToken(),
    };
    const axiosConfig:AxiosRequestConfig = {
      headers: headers,
    };

    await api.delete(APIRoute.Logout, axiosConfig);
    dropToken();
    dispatch(changeAuth(AuthStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
