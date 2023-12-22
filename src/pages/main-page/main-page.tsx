import MainFilmCard from '../../components/main-film-card/main-film-card';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterByGenre, showFilms } from '../../redux/store/data-process/data-process';
import ShowMore from '../../components/show-more/show-more';
import FilmsByGenres from '../../components/films-by-genre/genres';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getHeroFilm } from '../../redux/store/data-process/data-selectors';
import { Genres } from '../../const';

export default function Main() {
  const dispatch = useAppDispatch();
  const heroFilm = useAppSelector(getHeroFilm);

  useEffect(() => {
    dispatch(filterByGenre(Genres.All));
    dispatch(showFilms());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <meta charSet="UTF-8" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/main.min.css" />
      {heroFilm && <MainFilmCard heroFilm={heroFilm} />}
      <div className="page-content">
        <FilmsByGenres/>
        <ShowMore/>
        <Footer/>
      </div>
    </>);
}
