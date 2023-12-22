import { render, screen} from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../utils/mock-component';
import { AppRoute, genres } from '../../const';
import App from './app';
import { makeFakeStore } from '../../utils/mocks';
import { film } from '../../utils/films';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Main" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Root);

    render(withStoreComponent);

    genres.forEach((genre) =>{
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('should render "SignIn" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    screen.getAllByText('Sign in').forEach((phrase) => {
      expect(phrase).toBeInTheDocument();
    });
  });

  it('should render "MoviePage" when user navigate to "/films/:id"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(`/films/${film.id}`);

    render(withStoreComponent);

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });
});
