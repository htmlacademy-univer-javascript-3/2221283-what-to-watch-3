import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilmStatus } from '../../redux/store/api-actions';
import { getMyFilms } from '../../redux/store/data-process/data-selectors';
import { FilmProps, HeroProps } from '../../types/types';

type MyListButtonProps = {
  film: FilmProps | HeroProps;
};

export default function MyListButton({film}:MyListButtonProps) {
  const dispatch = useAppDispatch();
  const myList = useAppSelector(getMyFilms);
  const [favorite, setFavorite] = useState(film.isFavorite);

  function handleClick(): void {
    dispatch(
      setFilmStatus(film.id)
    );
    setFavorite(!favorite);
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={favorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myList.length}</span>
    </button>
  );
}
