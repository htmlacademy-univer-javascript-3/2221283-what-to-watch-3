import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component.tsx';
import { NameSpace } from '../../const.tsx';
import CardList from './card-list.tsx';
import { SMALLFILMS } from '../../utils/films.ts';

describe('Component: CardList', () => {

  it('should render correctly', () => {
    const expectedCount = SMALLFILMS.length;
    const expectedName = SMALLFILMS[0].name;
    const preparedComponent = withHistory(<CardList/>);
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { showedFilms: SMALLFILMS },
    });

    render(withStoreComponent);

    expect(screen.getAllByTestId('movie').length).toBe(expectedCount);
    expect(screen.getByText(expectedName)).toBeInTheDocument();
  });
});
