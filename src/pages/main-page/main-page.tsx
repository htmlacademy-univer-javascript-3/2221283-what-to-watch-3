import MainFilmCard from '../../components/main-film-card';
import Footer from '../../components/footer';
import { useAppDispatch } from '../../hooks';
import { changeGenre, getFilms } from '../../redux/store/action';
import ShowMore from '../../components/show-more';
import Genres from '../../components/genres';

export default function Main() {
  const dispatch = useAppDispatch();
  dispatch(changeGenre('All'));
  dispatch(getFilms());
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
