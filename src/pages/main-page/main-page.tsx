import MainFilmCard from '../../components/main-film-card';
import { Helmet } from 'react-helmet-async';
import { MainProps } from '../../types/types';
import CardList from '../../components/card-list';
import Footer from '../../components/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Genre } from '../../types/genre';
import { useEffect } from 'react';
import { getFilms } from '../../store/action';
import GenreList from '../../components/genre-list/genre-list';

function MainPage({heroFilmCard}: MainProps): JSX.Element {
  const {title, releaseDate, genre} = heroFilmCard;

  const dispatch = useAppDispatch();
  const genres: Genre[] = useAppSelector((state) => ['All genres', ...new Set(state.films.map((film) => film.genre))] as Genre[]);
  const activeGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>WTW. Главная страница</title>
      </Helmet>
      <MainFilmCard title={title} genre={genre} releaseDate={releaseDate}
        id={0} posterImage={''} backgroundImage={''} videoLink={''} isFavorite={false} previewImage={''}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genres={genres} />
          <CardList filmsCards={films} genre={activeGenre}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
