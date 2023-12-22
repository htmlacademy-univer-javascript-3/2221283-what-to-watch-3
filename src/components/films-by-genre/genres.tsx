import { useState } from 'react';
import CardList from '../card-list/card-list';
import Genre from '../genre/genre';
import { genres } from '../../const';

export default function FilmsByGenres(){

  const [active, setActive] = useState('All');

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre) =>
          <Genre name={genre} key={genre} isActive={active} setActive={setActive}/>
        )}
      </ul>
      <CardList/>
    </section>
  );
}
