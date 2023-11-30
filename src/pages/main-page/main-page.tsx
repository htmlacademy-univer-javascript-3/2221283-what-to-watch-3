import MainFilmCard from '../../components/main-film-card';
import Footer from '../../components/footer';
import { HeroProps } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { changeGenre, getFilms } from '../../redux/store/action';
import ShowMore from '../../components/show-more';
import Genres from '../../components/genres';

type MainProps = {
  heroFilmCard: HeroProps;
}

export default function Main({heroFilmCard}: MainProps) {
  const { name, released, genre } = heroFilmCard;
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
      <MainFilmCard name={name} released={released} genre={genre} id={0} posterImage={''} backgroundImage={''} videoLink={''} isFavorite={false} previewImage={''}/>
      <div className="page-content">
        <Genres/>
        <ShowMore/>
        <Footer/>
      </div>
    </>);
}
