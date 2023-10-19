import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthStatus } from '../const';
import MainPage from '../pages/main-page/main-page';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/film/movie-page';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundPage from '../pages/not-found/not-found';

type MainFilmCardProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({title, genre, releaseDate}: MainFilmCardProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage title = {title} genre = {genre} releaseDate= {releaseDate} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthStatus.NoAuth}>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage />}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview />}
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
