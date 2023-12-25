import { render, screen} from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../utils/mock-component';
import { AppRoute, AuthStatus, NameSpace, genres } from '../../const';
import App from './app';
import { makeFakeStore } from '../../utils/mocks';
import { FILM } from '../../utils/films';

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
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.Data]: {
        heroFilm: null,
        heroFilmLoadError: false,
        isHeroFilmLoading: false,
        allLoadedFilms: [],
        isFilmsLoading: false,
        filmsLoadError: false,
        loadedFilm: FILM,
        isFilmLoading: false,
        filmLoadError: false,
        allFilmsByGenre: [],
        genre: '',
        reviews: [],
        isReviewsLoading: false,
        ReviewsLoadError: false,
        similarFilms: [],
        similarFilmsLoadError: false,
        isSimilarFilmsLoading: false,
        myList: [],
        isMyListLoading: false,
        MyListLoadError: false,
        showedFilms: [],
        shownFilmsCount: 0
      },
    }));

    mockHistory.push(`/films/${FILM.id}`);

    render(withStoreComponent);

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should render the "MyList" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthStatus.Auth,
          user: {
            id:123,
            email:'john@mail.ru',
            token: 'asd213=',
            avatarUrl:'photo.jpg',
          },
          signInError: false,
        },
      })
    );
    mockHistory.push('/mylist');

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('should render the "Player" when user navigate to "/player"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.Data]: {
        heroFilm: null,
        heroFilmLoadError: false,
        isHeroFilmLoading: false,
        allLoadedFilms: [],
        isFilmsLoading: false,
        filmsLoadError: false,
        loadedFilm: FILM,
        isFilmLoading: false,
        filmLoadError: false,
        allFilmsByGenre: [],
        genre: '',
        reviews: [],
        isReviewsLoading: false,
        ReviewsLoadError: false,
        similarFilms: [],
        similarFilmsLoadError: false,
        isSimilarFilmsLoading: false,
        myList: [],
        isMyListLoading: false,
        MyListLoadError: false,
        showedFilms: [],
        shownFilmsCount: 0
      },
    }));
    mockHistory.push(`/player/${FILM.id}`);

    render(withStoreComponent);

    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('should render the "NotFoundPage" when user navigate to unknown route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push('/*');

    render(withStoreComponent);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });

  it('should render the "AddReview" when user navigate to ""/films/:id/review""', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthStatus.Auth,
          user: {
            id:123,
            email:'john@mail.ru',
            token: 'asd213=',
            avatarUrl:'photo.jpg',
          },
          signInError: false,
        },
        [NameSpace.Data]: {
          heroFilm: null,
          heroFilmLoadError: false,
          isHeroFilmLoading: false,
          allLoadedFilms: [],
          isFilmsLoading: false,
          filmsLoadError: false,
          loadedFilm: FILM,
          isFilmLoading: false,
          filmLoadError: false,
          allFilmsByGenre: [],
          genre: '',
          reviews: [],
          isReviewsLoading: false,
          ReviewsLoadError: false,
          similarFilms: [],
          similarFilmsLoadError: false,
          isSimilarFilmsLoading: false,
          myList: [],
          isMyListLoading: false,
          MyListLoadError: false,
          showedFilms: [],
          shownFilmsCount: 0
        },
      })
    );
    mockHistory.push(`/films/${FILM.id}/review`);

    render(withStoreComponent);

    screen.getAllByAltText(FILM.name).forEach((altText) => {
      expect(altText).toBeInTheDocument();
    });
  });
});
