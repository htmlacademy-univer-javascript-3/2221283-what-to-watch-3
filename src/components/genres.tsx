import { useState } from 'react';
import CardList from './card-list';
import Genre from './genre';

const genres = ['All', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thriller'];

export default function Genres(){

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
