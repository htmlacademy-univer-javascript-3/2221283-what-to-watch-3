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
import { AppProps } from '../types/types';

function App({heroFilmCard, filmsCards}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage heroFilmCard={heroFilmCard} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthStatus.Auth}>
                <MyList
                  filmsCards = {filmsCards}
                />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.AddReview} element={
            <PrivateRoute authorizationStatus={AuthStatus.Auth}>
              <AddReview
                name = {heroFilmCard.title}
                previewImage={heroFilmCard.previewImage}
                posterImage={heroFilmCard.posterImage}
              />
            </PrivateRoute>
          }
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage filmsCards = {filmsCards.slice(0,4)} />}
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
