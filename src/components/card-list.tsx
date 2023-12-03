import Card from './card';
import { useAppSelector } from '../hooks';
import { getShowedFilms } from '../redux/store/data-process/data-selectors';

export default function CardList() {
  const films = useAppSelector(getShowedFilms);
  return (
    <div className="catalog__films-list">
      {films.map((filmCard) =>
        (
          <article className="small-film-card catalog__films-card" key={filmCard.id}>
            <Card id={filmCard.id} name={filmCard.name} previewImage={filmCard.previewImage} previewVideoLink={filmCard.previewVideoLink} />
          </article>
        )
      )}
    </div>
  );
}
