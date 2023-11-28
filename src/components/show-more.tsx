import { useAppDispatch, useAppSelector } from '../hooks';
import { getFilms } from '../store/action';

export default function ShowMore() {
  const dispatch = useAppDispatch();
  const showFilmsCount = useAppSelector((state) => state.shownFilmsCount);
  const filmsCount = useAppSelector((state) => state.films);
  return (
    <div className="catalog__more">
      {showFilmsCount !== filmsCount.length && (
        <button className="catalog__button" type="button" onClick={() =>{
          dispatch(getFilms());
        }}
        >
          Show more
        </button>)}
    </div>
  );
}
