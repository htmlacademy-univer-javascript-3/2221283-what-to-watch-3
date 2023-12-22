import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import MyListButton from './my-list-button';
import { film, smallFilms } from '../../utils/films';
import { NameSpace } from '../../const';

describe('Component: MyListButton', () => {
  it('should render correctly', () => {
    const expectedText = 'My list';
    const mockFilm = film;
    const mockMyList = smallFilms;

    const preparedComponent = withHistory(
      <MyListButton film={mockFilm}/>
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { myList: mockMyList }
    });
    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
