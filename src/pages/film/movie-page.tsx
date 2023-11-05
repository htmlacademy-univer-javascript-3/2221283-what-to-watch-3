/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Helmet } from 'react-helmet-async';
import CardList from '../../components/card-list';
import { MoviePageProps } from '../../types/types';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import Footer from '../../components/footer';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Overview from '../../components/overviews';
import Details from '../../components/details';
import Reviews from '../../types/reviews';

export default function MoviePage({filmsCards}: MoviePageProps): JSX.Element {
  const params = useParams();
  const [toggleState, setToggleState] = useState(1);
  const id = params.id ? parseInt(params.id, 10) : 1;
  const film = filmsCards.find((x) => x.id === id);
  let textRating = '';
  const rating = film ? film.rating : 0;
  if (rating <= 3){
    textRating = 'Bad';
  } else if (rating > 3 && rating <= 5){
    textRating = 'Normal';
  } else if (rating > 5 && rating < 8){
    textRating = 'Good';
  } else if (rating >= 8){
    textRating = 'Very good';
  }

  const toggleTabs = (index:number) => {
    setToggleState(index);
  };

  return (
    <>
      <Helmet>
        <title>WTW. Выбранный фильм</title>
      </Helmet>
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
            <Logo />
            <Profile />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`/player/${id}`} style={{ textDecoration: 'none' }}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={'review'} className="btn film-card__button">
                  Add review
                </Link>
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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={toggleState === 1 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    onClick={() => toggleTabs(1)}
                  >
                    <a className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className={toggleState === 2 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    onClick={() => toggleTabs(2)}
                  >
                    <a className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className={toggleState === 3 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    onClick={() => toggleTabs(3)}
                  >
                    <a className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <Overview
                rating={film?.rating}
                textRating={textRating}
                scoresCount={film?.scoresCount}
                active={toggleState === 1}
                description={film?.description}
                director={film?.director}
                starring={film?.starring}
              />
              <Details
                active={toggleState === 2}
                director={film?.director}
                starring={film?.starring}
                runtime={film?.runTime}
                genre={film?.genre}
                released={film?.released}
              />
              <Reviews active={toggleState === 3}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CardList filmsCards={filmsCards} genre={film?.genre}></CardList>
        </section>
        <Footer />
      </div>
    </>
  );
}
