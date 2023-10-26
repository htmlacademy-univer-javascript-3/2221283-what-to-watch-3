import Card from './card';
import { CardListProps } from '../types/types';
import { useState } from 'react';

function CardList({filmsCards}: CardListProps): JSX.Element {
  const [, setActiveCard] = useState(-1);
  return (
    <div className="catalog__films-list">

      {filmsCards.map((filmCard) => (
        <article className="small-film-card catalog__films-card" key={filmCard.id} onMouseEnter={() => {
          setActiveCard(filmCard.id);
        }}
        >
          <Card id={filmCard.id} name={filmCard.title} previewImage={filmCard.previewImage} />
        </article>
      )
      )}
    </div>
  );
}

export default CardList;
