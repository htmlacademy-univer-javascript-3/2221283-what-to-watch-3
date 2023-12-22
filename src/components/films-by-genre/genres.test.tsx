import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component.tsx';
import { NameSpace, genres } from '../../const.tsx';
import { SMALLFILMS } from '../../utils/films.ts';
import FilmsByGenres from './genres.tsx';

describe('Component: FilmsByGenre', () => {

  it('should render correctly', () => {
    const expectedLength = SMALLFILMS.length;
    const preparedComponent = withHistory(<FilmsByGenres/>);
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { showedFilms: SMALLFILMS },
    });

    render(withStoreComponent);

    genres.forEach((genre)=>{
      expect(screen.getByText(genre)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId('movie').length).toBe(expectedLength);
  });
});
