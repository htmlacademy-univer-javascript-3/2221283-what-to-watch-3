import CardList from '../../components/card-list';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import Footer from '../../components/footer';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchReviews, fetchSimilarFilms } from '../../redux/store/api-actions';
import { store } from '../../redux/store';
import { AuthStatus } from '../../const';
import Tabs from '../../components/tabs';
import { getFilm, getReviews } from '../../redux/store/data-process/data-selectors';
import { getAuthStatus } from '../../redux/store/user-process/user-selectors';
import { filterByGenre, showFilms } from '../../redux/store/data-process/data-process';

function convertToText(rating:number):string{
  let textRating = '';
  if (rating <= 3){
    textRating = 'Bad';
  } else if (rating > 3 && rating <= 5){
    textRating = 'Normal';
  } else if (rating > 5 && rating < 8){
    textRating = 'Good';
  } else if (rating >= 8){
    textRating = 'Very good';
  }
  return textRating;
}

export default function MoviePage() {

  const params = useParams();
  const id = params.id ?? '';

  useEffect(() => {
    store.dispatch(fetchFilm(id));
    store.dispatch(fetchSimilarFilms(id));
    store.dispatch(fetchReviews(id));
  }, [id]);

  const film = useAppSelector(getFilm);
  const reviews = useAppSelector(getReviews);
  const isLogin = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  const rating = film ? film.rating : 0;
  const textRating = convertToText(rating);

  const dispatch = useAppDispatch();
  dispatch(filterByGenre(film?.genre ? film?.genre : 'All'));
  dispatch(showFilms());

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film?.backgroundImage}
              alt={film?.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <Profile/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={`/player/${id}`} className='film-card__button' style={{textDecoration:'none', color: '#eee5b5'}}>
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {isLogin && (<Link to={'review'} className="btn film-card__button">Add review</Link>)}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film?.posterImage}
                alt={film?.name}
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
