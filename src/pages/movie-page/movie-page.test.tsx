import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { AuthStatus, NameSpace } from '../../const';
import { FILM, SMALLFILMS } from '../../utils/films';
import MoviePage from './movie-page';
import { reviews } from '../../utils/reviews';


describe('Page: MoviePage', () => {
  it('should render correct with no Auth', () => {
    const mockFilm = FILM;
    const mockReviews = reviews;
    const mockFilms = SMALLFILMS;

    const withHistoryComponent = withHistory(<MoviePage />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm, reviews:mockReviews, showedFilms: mockFilms },
      [NameSpace.User]: { authorizationStatus: AuthStatus.NoAuth },

    });

    render(withStoreComponent);

    screen.getAllByText(mockFilm.name).forEach((name)=>{
      expect(name).toBeInTheDocument();
    });

  });

  it('should render post review button and mylist button when Auth', () => {
    const mockFilm = FILM;
    const mockReviews = reviews;
    const mockFilms = SMALLFILMS;

    const withHistoryComponent = withHistory(<MoviePage />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm, reviews:mockReviews, showedFilms: mockFilms, myList: mockFilms },
      [NameSpace.User]: { authorizationStatus: AuthStatus.Auth },

    });

    render(withStoreComponent);

    screen.getAllByText(mockFilm.name).forEach((name)=>{
      expect(name).toBeInTheDocument();
    });
    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
  });
});
