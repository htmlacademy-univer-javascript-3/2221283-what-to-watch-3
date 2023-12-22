import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { AuthStatus, NameSpace } from '../../const';
import { SMALLFILMS } from '../../utils/films';
import MyList from './my-list';


describe('Page: MyList', () => {
  it('should render correct', () => {
    const mockFilms = SMALLFILMS;
    const mockMyListLength = mockFilms.length;

    const withHistoryComponent = withHistory(<MyList />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { myList: mockFilms, showedFilms: mockFilms },
      [NameSpace.User]: { authorizationStatus: AuthStatus.Auth }
    });

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText(mockMyListLength)).toBeInTheDocument();

  });
});
