import CardList from '../../components/card-list/card-list';
import Logo from '../../components/logo/logo';
import Profile from '../../components/profile/profile';
import Footer from '../../components/footer/footer';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchReviews, fetchSimilarFilms } from '../../redux/store/api-actions';
import { AuthStatus } from '../../const';
import Tabs from '../../components/tabs/tabs';
import { getFilm, getReviews } from '../../redux/store/data-process/data-selectors';
import { getAuthStatus } from '../../redux/store/user-process/user-selectors';
import { filterByGenre, showFilms } from '../../redux/store/data-process/data-process';
import { convertRatingToText } from '../../utils/functions';
import { Helmet } from 'react-helmet-async';
import MyListButton from '../../components/my-list-button/my-list-button';

export default function MoviePage() {

  const params = useParams();
  const id = params.id;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id){
      dispatch(fetchFilm(id));
      dispatch(fetchSimilarFilms(id));
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id]);

  const film = useAppSelector(getFilm);
  const reviews = useAppSelector(getReviews);
  const isLogin = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  if (!film) {
    return null;
  }

  const rating = film.rating;
  const textRating = convertRatingToText(rating);

  dispatch(filterByGenre(film.genre));
  dispatch(showFilms());

  return (
    <>
      <Helmet>
        <title>{film.name}</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.backgroundImage}
              alt={film.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <Profile/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={`/player/${film.id}`} className='film-card__button' style={{textDecoration:'none', color: '#eee5b5'}}>
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>

                {isLogin && <MyListButton film={film}/>}

                {isLogin && (<Link to={'review'} className="btn film-card__button">Add review</Link>)}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <Tabs film={film} textRating={textRating} reviews={reviews}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CardList/>
        </section>
        <Footer/>
      </div>
    </>
  );
}
