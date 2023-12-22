import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NameSpace } from '../../const.tsx';
import { SMALLFILMS } from '../../utils/films.ts';
import Genre from './genre.tsx';
import { withHistory, withStore } from '../../utils/mock-component.tsx';

describe('Component: Genre', () => {
  // when clicked on genre, should change classname to active
  it('should render correctly', () => {
    const expectedName = 'All';

    const preparedComponent = withHistory(
      <Genre name={expectedName} isActive={''} setActive={function (): void {
        throw new Error('Function not implemented.');
      } }
      />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { showedFilms: SMALLFILMS },
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedName)).toBeInTheDocument();
  });
});
