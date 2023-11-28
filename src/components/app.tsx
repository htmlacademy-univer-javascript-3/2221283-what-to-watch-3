import Main from '../pages/main-page/main-page';
import { BrowserRouter, Routes,Route,
} from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/film/movie-page';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundPage from '../pages/not-found/not-found';
import {AppRoute, AuthStatus} from '../const';
import PrivateRoute from './private-route/private-route';
import { HeroProps, FilmProps, SmallFilmProps, ReviewProps } from '../types/types';

type AppProps = {
  heroFilmCard: HeroProps;
  filmCards: FilmProps[];
  smallFilmCards: SmallFilmProps[];
  reviews: ReviewProps[];
}

export default function App({heroFilmCard, filmCards, smallFilmCards, reviews}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={
          <Main
            heroFilmCard={heroFilmCard}
          />
        }
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Films} element={
          <MoviePage
            filmCards = {filmCards}
            reviews = {reviews}
          />
        }
        />
        <Route path={AppRoute.MyListEnum} element={
          <PrivateRoute authorizationStatus={AuthStatus.Auth}>
            <MyList
              smallFilmCards = {smallFilmCards}
            />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.AddReviewEnum} element={
          <PrivateRoute authorizationStatus={AuthStatus.Auth}>
            <AddReview
              filmsCards = {filmCards}
            />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.PlayerEnum} element={
          <Player
            filmsCards = {filmCards}
          />
        }
        />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
