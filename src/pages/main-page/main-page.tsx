import MainFilmCard from '../../components/main-film-card';
import { Helmet } from 'react-helmet-async';
import { MainProps } from '../../types/types';
import CardList from '../../components/card-list';
import Footer from '../../components/footer';

function MainPage({heroFilmCard, filmsCards}: MainProps): JSX.Element {
  const {title, releaseDate, genre} = heroFilmCard;
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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <CardList filmsCards={filmsCards} genre={undefined}/>

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
