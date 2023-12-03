import Main from '../pages/main-page/main-page';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/film/movie-page';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundPage from '../pages/not-found/not-found';
import {AppRoute, AuthStatus} from '../const';
import PrivateRoute from './private-route/private-route';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import { getAuthStatus } from '../redux/store/user-process/user-selectors';
import { getFilmsLoadStatus } from '../redux/store/data-process/data-selectors';


export default function App() {
  const authStatus = useAppSelector(getAuthStatus);
  const isFilmsLoading = useAppSelector(getFilmsLoadStatus);

  if (isFilmsLoading || authStatus === AuthStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <Routes>
      <Route path={AppRoute.Root} element={
        <Main />
      }
      />
      <Route path={AppRoute.Login} element={<SignIn />} />
      <Route path={AppRoute.Films} element={
        <MoviePage />
      }
      />
      <Route path={AppRoute.MyListEnum} element={
        <PrivateRoute>
          <MyList />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.AddReviewEnum} element={
        <PrivateRoute>
          <AddReview />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.PlayerEnum} element={
        <Player />
      }
      />
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  );
}
