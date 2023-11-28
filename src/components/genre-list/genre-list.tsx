import { GenreListProps } from './genre-list-props';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { Genre } from '../../types/genre';
import { changeGenre } from '../../store/action';

export default function GenreList({genres}: GenreListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre: Genre = useAppSelector((state) => state.genre);

  const onChangeGenreClick = (newGenre: Genre) => {
    dispatch(changeGenre(newGenre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': genre === activeGenre})}>
          <Link to="#" className="catalog__genres-link" onClick={() => onChangeGenreClick(genre)}>
            {genre}
          </Link>
        </li>
      ))}
    </ul>);
}
