import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component.tsx';
import { NameSpace } from '../../const.tsx';
import { SMALLFILMS } from '../../utils/films.ts';
import Card from './card.tsx';

describe('Component: Card', () => {

  it('should render correctly', () => {
    const mockFilm = SMALLFILMS[0];
    const id = mockFilm.id;
    const previewImage = mockFilm.previewImage;
    const name = mockFilm.name;
    const previewVideoLink = mockFilm.previewVideoLink;

    const preparedComponent = withHistory(<Card id={id} previewImage={previewImage} name={name} previewVideoLink={previewVideoLink}/>);
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { showedFilms: SMALLFILMS },
    });

    render(withStoreComponent);

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
