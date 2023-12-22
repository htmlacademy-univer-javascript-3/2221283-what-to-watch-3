import { useAppDispatch } from '../../hooks';
import { filterByGenre, showFilms } from '../../redux/store/data-process/data-process';

type GenreProps = {
  name:string;
  isActive:string;
  setActive:React.Dispatch<React.SetStateAction<string>>;
}

export default function Genre({name, isActive, setActive}:GenreProps) {

  const dispatch = useAppDispatch();

  return (
    <li className={`catalog__genres-item ${isActive === name ? 'catalog__genres-item--active' : ''}`}>
      <div className='catalog__genres-link'
        onClick={() => {
          dispatch(filterByGenre(name));
          dispatch(showFilms());
          setActive(name);
        }}
      >
        {name}
      </div>
    </li>
  );
}
