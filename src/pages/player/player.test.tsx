import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import Player from './player';
import { NameSpace } from '../../const';
import { film } from '../../utils/films';


describe('Page: Player', () => {
  it('should render correct', () => {
    const mockFilm = film;

    const withHistoryComponent = withHistory(<Player />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm }
    });

    render(withStoreComponent);

    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();

  });
});
