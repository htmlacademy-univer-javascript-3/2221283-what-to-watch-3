import { useAppDispatch, useAppSelector } from '../../hooks';
import { showFilms } from '../../redux/store/data-process/data-process';
import { getAllFilmsByGenre, getShowedFilmsCount } from '../../redux/store/data-process/data-selectors';

export default function ShowMore() {
  const dispatch = useAppDispatch();
  const showFilmsCount = useAppSelector(getShowedFilmsCount);
  const filmsCount = useAppSelector(getAllFilmsByGenre).length;
  return (
    <div className="catalog__more">
      {showFilmsCount !== filmsCount && (
        <button className="catalog__button" type="button" data-testid='showMoreButton' onClick={() =>{
          dispatch(showFilms);
        }}
        >
          Show more
        </button>)}
    </div>
  );
}
