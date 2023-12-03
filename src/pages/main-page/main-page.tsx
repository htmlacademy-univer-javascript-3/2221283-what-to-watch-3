import MainFilmCard from '../../components/main-film-card';
import Footer from '../../components/footer';
import { useAppDispatch } from '../../hooks';
import { filterByGenre, showFilms } from '../../redux/store/data-process/data-process';
import ShowMore from '../../components/show-more';
import Genres from '../../components/genres';
import { useEffect } from 'react';

export default function Main() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(filterByGenre('All'));
    dispatch(showFilms());
  }, [dispatch]);
  return (
    <>
      <meta charSet="UTF-8" />
      <title>WTW</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/main.min.css" />
      <MainFilmCard />
      <div className="page-content">
        <Genres/>
        <ShowMore/>
        <Footer/>
      </div>
    </>);
}
