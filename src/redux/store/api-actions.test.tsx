import { beforeEach, describe, expect } from 'vitest';
import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { AppThunkDispatch, extractActionsTypes } from '../../utils/mocks';
import { State } from '../../types/state';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { NameSpace, AuthStatus, APIRoute } from '../../const';
import { checkAuthAction, fetchFilm, fetchFilms, fetchHeroFilm, fetchMyList, fetchReviews, fetchSimilarFilms, sendReview, setFilmStatus } from './api-actions';
import { film, heroCard, smallFilms } from '../../utils/films';
import { reviews } from '../../utils/reviews';
import { AxiosError } from 'axios';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator(
      {
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
      }
    );
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fullfield" with thunk "checkAuthAction"',async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400',async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilms', () => {
    it('should dispatch "fetchFilms.pending" and "fetchFilms.fullfield" when response thunk "fetchFilms"',async () => {
      const mockFilms = smallFilms;
      mockAxiosAdapter.onGet(APIRoute.Films).reply(200, mockFilms);

      await store.dispatch(fetchFilms());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchFilms.fulfilled
      >;
      expect(extractedActionsTypes).toEqual([
        fetchFilms.pending.type,
        fetchFilms.fulfilled.type,
      ]);

      expect(fetchFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('should dispatch "fetchFilms.pending" and "fetchFilms.rejected" when server response 400',async () => {
      mockAxiosAdapter.onGet(APIRoute.Films).reply(400);

      await store.dispatch(fetchFilms());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilms.pending.type,
        fetchFilms.rejected.type,
      ]);
    });
  });

  describe('fetchHeroFilm', () => {
    it('should dispatch "fetchHeroFilm.pending" and "fetchHeroFilm.fullfield" when response thunk "fetchHeroFilm"',async () => {
      const mockHeroFilm = heroCard;
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(200, mockHeroFilm);

      await store.dispatch(fetchHeroFilm());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchHeroFilmFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchHeroFilm.fulfilled
      >;
      expect(extractedActionsTypes).toEqual([
        fetchHeroFilm.pending.type,
        fetchHeroFilm.fulfilled.type,
      ]);

      expect(fetchHeroFilmFulfilled.payload).toEqual(mockHeroFilm);
    });

    it('should dispatch "fetchHeroFilm.pending" and "fetchHeroFilm.rejected" when server response 400',async () => {
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(400);

      await store.dispatch(fetchHeroFilm());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchHeroFilm.pending.type,
        fetchHeroFilm.rejected.type,
      ]);
    });
  });

  describe('fetchFilm', () => {
    it('should dispatch "fetchFilm.pending" and "fetchFilm.fullfield" when response thunk "fetchFilm"',async () => {
      const mockFilm = film;
      mockAxiosAdapter.onGet(`${APIRoute.Film}${mockFilm.id}`).reply(200, mockFilm);

      await store.dispatch(fetchFilm(mockFilm.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchFilm.fulfilled
      >;
      expect(extractedActionsTypes).toEqual([
        fetchFilm.pending.type,
        fetchFilm.fulfilled.type,
      ]);

      expect(fetchFilmFulfilled.payload).toEqual(mockFilm);
    });

    it('should dispatch "fetchFilm.pending" and "fetchFilm.rejected" when server response 400',async () => {
      const id = 'randomString';
      mockAxiosAdapter.onGet(`${APIRoute.Film}${id}`).reply(400);

      await store.dispatch(fetchFilm(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilm.pending.type,
        fetchFilm.rejected.type,
      ]);
    });
  });

  describe('fetchSimilarFilms', () => {
    it('should dispatch "fetchSimilarFilms.pending" and "fetchSimilarFilms.fullfield" when response thunk "fetchSimilarFilms"',async () => {
      const mockFilms = smallFilms;
      const filmId = smallFilms[0].id;
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${filmId}/similar`).reply(200, mockFilms);

      await store.dispatch(fetchSimilarFilms(filmId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchSimilarFilmsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchSimilarFilms.fulfilled
      >;
      expect(extractedActionsTypes).toEqual([
        fetchSimilarFilms.pending.type,
        fetchSimilarFilms.fulfilled.type,
      ]);

      expect(fetchSimilarFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('should dispatch "fetchSimilarFilms.pending" and "fetchSimilarFilms.rejected" when server response 400',async () => {
      const id = 'randomString';
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}/similar`).reply(400);

      await store.dispatch(fetchSimilarFilms(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilms.pending.type,
        fetchSimilarFilms.rejected.type,
      ]);
    });
  });

  describe('fetchReviews', () => {
    it('should dispatch "fetchReviews.pending" and "fetchReviews.fullfield" when response thunk "fetchReviews"',async () => {
      const mockReviews = reviews;
      const id = film.id;
      mockAxiosAdapter.onGet(`${APIRoute.Comments}${id}`).reply(200, mockReviews);

      await store.dispatch(fetchReviews(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchReviews.fulfilled
      >;
      expect(extractedActionsTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type,
      ]);

      expect(fetchReviewsFulfilled.payload).toEqual(mockReviews);
    });

    it('should dispatch "fetchReviews.pending" and "fetchReviews.rejected" when server response 400',async () => {
      const id = 'randomString';
      mockAxiosAdapter.onGet(`${APIRoute.Comments}${id}`).reply(400);

      await store.dispatch(fetchReviews(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviews.pending.type,
        fetchReviews.rejected.type,
      ]);
    });
  });

  describe('fetchMyList', () => {
    it('should dispatch "fetchMyList.pending" and "fetchMyList.fullfield" when response thunk "fetchMyList"',async () => {
      const mockMyList = smallFilms;
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockMyList);

      await store.dispatch(fetchMyList());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchMyListFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchMyList.fulfilled
      >;
      expect(extractedActionsTypes).toEqual([
        fetchMyList.pending.type,
        fetchMyList.fulfilled.type,
      ]);

      expect(fetchMyListFulfilled.payload).toEqual(mockMyList);
    });

    it('should dispatch "fetchMyList.pending" and "fetchMyList.rejected" when server response 400',async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400);

      await store.dispatch(fetchMyList());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchMyList.pending.type,
        fetchMyList.rejected.type,
      ]);
    });
  });

  describe('sendReview', () => {
    it('should dispatch "sendReview.pending" and "sendReview.fullfield" when response thunk "sendReview"',async () => {
      const mockReview = reviews[0];
      const id = mockReview.id;
      const data = {
        comment: mockReview.comment,
        rating: mockReview.rating,
      };

      mockAxiosAdapter.onPost(`${APIRoute.AddComment}${id}`).reply(200, mockReview);

      await store.dispatch(sendReview({
        ...data,
        id: id,
      }
      ));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const sendReviewFullfield = emittedActions.at(1) as ReturnType<
        typeof sendReview.fulfilled
      >;
      expect(extractedActionsTypes).toEqual([
        sendReview.pending.type,
        sendReview.fulfilled.type,
      ]);

      expect(sendReviewFullfield.payload).toEqual(mockReview);
    });

    it('should dispatch "sendReview.pending" and "sendReview.rejected" when server response 400',async () => {
      const id = 'randomString';
      const data = {};
      mockAxiosAdapter.onGet(`${APIRoute.AddComment}${id}`, data).reply(400);

      await store.dispatch(sendReview({ id: id, rating: 0, comment: '' }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        sendReview.pending.type,
        fetchFilm.rejected.type,
      ]);
    });
  });

  describe('setFilmStatus', () => {
    it('should dispatch "setFilmStatus.pending" and "setFilmStatus.fullfield" when response thunk "setFilmStatus"',async () => {
      const id = film.id;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}${id}/1`).reply(200);

      await store.dispatch(setFilmStatus(id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        setFilmStatus.pending.type,
        fetchMyList.pending.type,
        setFilmStatus.fulfilled.type,
      ]);

    });

    it('should dispatch "setFilmStatus.pending" and "setFilmStatus.fullfield" when response 409',async () => {
      const id = film.id;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}${id}/0`).reply(409);

      try{
        await store.dispatch(setFilmStatus(id));
      } catch (error){
        if (error instanceof AxiosError && error.response?.status === 409){
          await store.dispatch(setFilmStatus(id));
        }
      }
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        setFilmStatus.pending.type,
        fetchMyList.pending.type,
        setFilmStatus.fulfilled.type,
      ]);
    });

    it('should dispatch "setFilmStatus.pending" and "setFilmStatus.rejected" when server response 400 (setting to fav /1)',async () => {
      const id = film.id;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}${id}/1`).reply(400);

      await store.dispatch(setFilmStatus(id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        setFilmStatus.pending.type,
        setFilmStatus.rejected.type,
      ]);
    });

    it('should dispatch "setFilmStatus.pending" and "setFilmStatus.rejected" when server response 400 (setting to no fav /0)',async () => {
      const id = film.id;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}${id}/0`).reply(400);

      await store.dispatch(setFilmStatus(id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        setFilmStatus.pending.type,
        setFilmStatus.rejected.type,
      ]);
    });
  });
});
