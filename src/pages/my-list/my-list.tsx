import CardList from '../../components/card-list';
import Footer from '../../components/footer';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import { SmallFilmProps } from '../../types/types';

type MyListProps = {
  smallFilmCards: SmallFilmProps[];
}

export default function MyList({smallFilmCards}: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{smallFilmCards.length}</span>
        </h1>
        <Profile/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CardList smallFilmCards={smallFilmCards} genre={undefined}/>
      </section>
      <Footer/>
    </div>
  );
}

