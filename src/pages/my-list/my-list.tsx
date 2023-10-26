import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CardList from '../../components/card-list';
import { MyListProps } from '../../types/types';
import Footer from '../../components/footer';
import Logo from '../../components/logo';

export default function MyList({filmsCards}: MyListProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>WTW. Мой список фильмов</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">{filmsCards.length}</span>
          </h1>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={'/login'} className="user-block__link" style={{ textDecoration: 'none' }}>
                Sign out
              </Link>
            </li>
          </ul>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CardList filmsCards={filmsCards} />
        </section>
        <Footer />
      </div>
    </>
  );
}
