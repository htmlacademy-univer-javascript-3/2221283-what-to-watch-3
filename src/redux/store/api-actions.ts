import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
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
    const headers = {
      'x-token': getToken(),
    };
    const {data} = await api.get<FilmProps>(`${APIRoute.Film}${id}`,{headers});
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
    const {data} = await api.get<HeroProps>(APIRoute.Promo, {headers});
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

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'USER/checkAuth',
  async (_arg, {extra: api}) => {
    const headers = {
      'x-token': getToken(),
    };
    const { data } = await api.get<UserData>(APIRoute.Login, {headers});
    return data;
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
    const headers = {
      'x-token': getToken(),
    };
    await api.delete(APIRoute.Logout, {headers});
    dropToken();
  },
);

export const fetchMyList = createAsyncThunk<SmallFilmProps[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchMyList',
  async (_arg, { extra: api}) => {
    const headers = {
      'x-token': getToken(),
    };
    const {data} = await api.get<SmallFilmProps[]>(APIRoute.Favorite, {headers});
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
      comment: comment,
      rating: rating,
    };
    const headers = {
      'x-token': getToken(),
    };
    await api.post(`${APIRoute.AddComment}${id}`, data, {headers});
  },
);

export const setFilmStatus = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'DATA/setFilmStatus',
  async (id, {dispatch, extra: api}) => {
    const headers = {
      'x-token': getToken()
    };
    const axiosConfig = {
    };

    try {
      await api.post(`${APIRoute.Favorite}${id}/1`, axiosConfig, {headers});
      dispatch(fetchMyList());
    } catch (error) {

      if (error instanceof AxiosError && error.response?.status === 409) {

        await api.post(`${APIRoute.Favorite}${id}/0`, axiosConfig, {headers});
        dispatch(fetchMyList());
      } else{
        throw error;
      }
    }
  }
);
