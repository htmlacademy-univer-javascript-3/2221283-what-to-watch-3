import { useState } from 'react';
import { FilmProps, ReviewProps } from '../types/types';
import Details from './details';
import Overview from './overviews';
import Reviews from './reviews';

type TabsProps = {
  film: FilmProps | null;
  textRating: string;
  reviews: ReviewProps[];
}

export default function Tabs({film, textRating, reviews}: TabsProps){
  const [toggleState, setToggleState] = useState(1);

  const toggleTabs = (index:number) => {
    setToggleState(index);
  };

  return(
    <>
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
      <Reviews
        active={toggleState === 3}
        reviews={reviews}
      />
    </>);
}
