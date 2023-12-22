import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { AuthStatus, NameSpace } from '../../const';
import { film } from '../../utils/films';
import AddReview from './add-review';


describe('Page: AddReview', () => {
  it('should render correct', () => {
    const mockFilm = film;

    const withHistoryComponent = withHistory(<AddReview />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm },
      [NameSpace.User]: { authorizationStatus: AuthStatus.Auth }
    });

    render(withStoreComponent);
    expect(screen.getByText(film.name)).toBeInTheDocument();
  });
});
