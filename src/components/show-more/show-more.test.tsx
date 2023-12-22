import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShowMore from './show-more.tsx';
import { withStore, withHistory } from '../../utils/mock-component.tsx';
import { NameSpace } from '../../const.tsx';
import { SMALLFILMS } from '../../utils/films.ts';

describe('Component: ShowMore', () => {
  it('should render correct', () => {
    const mockFilms = SMALLFILMS;
    const expectedText = 'Show more';

    const withHistoryComponent = withHistory(<ShowMore />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { showedFilms: mockFilms, allFilmsByGenre: mockFilms },
    });

    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('shouldnt render when no more films left to show', () => {
    const mockFilms = SMALLFILMS;
    const expectedText = 'Show more';

    const withHistoryComponent = withHistory(<ShowMore />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { showedFilms: mockFilms, allFilmsByGenre: mockFilms, shownFilmsCount: mockFilms.length },
    });

    render(withStoreComponent);
    expect(screen.queryByText(expectedText)).not.toBeInTheDocument();
  });
});
