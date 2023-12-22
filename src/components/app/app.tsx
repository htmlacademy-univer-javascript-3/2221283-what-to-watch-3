import Main from '../../pages/main-page/main-page';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/film/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFoundPage from '../not-found/not-found';
import {AppRoute, AuthStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import { getAuthStatus } from '../../redux/store/user-process/user-selectors';
import { getFilmsLoadStatus } from '../../redux/store/data-process/data-selectors';
import { HelmetProvider } from 'react-helmet-async';
import Spinner from '../loading-screen/spinner';
import { fetchMyList } from '../../redux/store/api-actions';
import { useAppSelector, useAppDispatch } from '../../hooks';

export default function App() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isFilmsLoading = useAppSelector(getFilmsLoadStatus);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthStatus.Unknown || isFilmsLoading) {
    return (
      <Spinner />
    );
  }
  if (authorizationStatus === AuthStatus.Auth){
    dispatch(fetchMyList());
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root} element={
          <Main/>
        }
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Films} element={
          <MoviePage/>
        }
        />
        <Route path={AppRoute.MyListEnum} element={
          <PrivateRoute>
            <MyList/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.AddReviewEnum} element={
          <PrivateRoute>
            <AddReview/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.PlayerEnum} element={
          <Player/>
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />}/>
      </Routes>
    </HelmetProvider>
  );
}
