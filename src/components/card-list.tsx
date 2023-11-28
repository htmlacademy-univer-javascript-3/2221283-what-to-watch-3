import Card from './card';
import { useAppSelector } from '../hooks';

export default function CardList() {
  const films = useAppSelector((state) => state.showedFilms);
  return (
    <div className="catalog__films-list">
      {films.map((filmCard) =>
        (
          <article className="small-film-card catalog__films-card" key={filmCard.id}>
            <Card id={filmCard.id} name={filmCard.name} previewImage={filmCard.previewImage} />
          </article>
        )
      )}
    </div>
  );
}
