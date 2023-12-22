import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthStatus, NameSpace } from '../../const.tsx';
import { HEROCARD, SMALLFILMS } from '../../utils/films.ts';
import { withHistory, withStore } from '../../utils/mock-component.tsx';
import HeroCard from './main-film-card.tsx';

describe('Component: HeroCard', () => {

  it('should render correctly when NoAuth (w/o mylist button)', () => {
    const mockHeroFilm = HEROCARD;

    const preparedComponent = withHistory(
      <HeroCard heroFilm={mockHeroFilm}/>
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.User]: { authorizationStatus: AuthStatus.NoAuth },
    });

    render(withStoreComponent);

    expect(screen.getByText(mockHeroFilm.name)).toBeInTheDocument();
    expect(screen.queryByText('My list')).not.toBeInTheDocument();

  });

  it('should render correctly with Auth (w mylist button)', () => {
    const mockHeroFilm = HEROCARD;
    const mockMyList = SMALLFILMS;
    const mockMyListLength = SMALLFILMS.length;

    const preparedComponent = withHistory(
      <HeroCard heroFilm={mockHeroFilm}/>
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.User]: { authorizationStatus: AuthStatus.Auth },
      [NameSpace.Data]: { myList: mockMyList }
    });

    render(withStoreComponent);

    expect(screen.getByText(mockHeroFilm.name)).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText(mockMyListLength)).toBeInTheDocument();
  });
});
