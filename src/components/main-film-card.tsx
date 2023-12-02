import { Link } from 'react-router-dom';
import Logo from './logo';
import Profile from './profile';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { fetchHeroFilm } from '../redux/store/api-actions';

function MainFilmCard() :JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHeroFilm());
  },[dispatch]);

  const mainFilm = useAppSelector((state) => state.heroFilm);

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={mainFilm?.backgroundImage}
          alt={mainFilm?.name || 'bg alt'}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <Profile />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={mainFilm?.posterImage}
              alt={mainFilm?.name || 'poster alt'}
              width="218" height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{mainFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{mainFilm?.genre}</span>
              <span className="film-card__year">{mainFilm?.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <Link to={'player/1'} className='film-card__button' style={{textDecoration:'none', color: '#eee5b5'}}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFilmCard;
