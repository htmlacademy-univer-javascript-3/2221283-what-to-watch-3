import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import MyListButton from './my-list-button';
import { FILM, SMALLFILMS } from '../../utils/films';
import { NameSpace } from '../../const';

describe('Component: MyListButton', () => {
  it('should render correctly', () => {
    const expectedText = 'My list';
    const mockFilm = FILM;
    const mockMyList = SMALLFILMS;

    const preparedComponent = withHistory(
      <MyListButton film={mockFilm}/>
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { myList: mockMyList }
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render inlist svg when in list', () => {
    const expectedText = 'My list';
    const mockFilm = FILM;
    mockFilm.isFavorite = true;
    const mockMyList = SMALLFILMS;


    const preparedComponent = withHistory(
      <MyListButton film={mockFilm}/>
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { myList: mockMyList }
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId('in-list')).toBeInTheDocument();

  });

  it('should render add svg when in not list', () => {
    const expectedText = 'My list';
    const mockFilm = FILM;
    mockFilm.isFavorite = false;
    const mockMyList = SMALLFILMS;


    const preparedComponent = withHistory(
      <MyListButton film={mockFilm}/>
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { myList: mockMyList }
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();

  });
});
