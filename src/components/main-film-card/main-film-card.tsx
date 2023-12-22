import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Profile from '../profile/profile';
import { useAppSelector } from '../../hooks';
import { HeroProps } from '../../types/types';
import { getAuthStatus } from '../../redux/store/user-process/user-selectors';
import { AuthStatus } from '../../const';
import MyListButton from '../my-list-button/my-list-button';

type HeroCardProps = {
  heroFilm: HeroProps;
}

export default function HeroCard({heroFilm}:HeroCardProps) {
  const id = heroFilm.id;
  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={heroFilm.backgroundImage}
          alt={heroFilm.name || 'bg alt'}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo/>
        <Profile/>
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={heroFilm.posterImage}
              alt={heroFilm.name || 'poster alt'}
              width={218}
              height={327}
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{heroFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{heroFilm.genre}</span>
              <span className="film-card__year">{heroFilm.released}</span>
            </p>
            <div className="film-card__buttons">

              <button className="btn btn--play film-card__button" type="button">
                <Link to={`player/${id ? id : 'null'}`} className='film-card__button' style={{textDecoration:'none', color: '#eee5b5'}}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
              </button>

              {isAuth && <MyListButton film={heroFilm}/>}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
