import CardList from '../../components/card-list';
import Footer from '../../components/footer';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMyFilms } from '../../redux/store/data-process/data-selectors';
import { useEffect } from 'react';
import { showMyFilms } from '../../redux/store/data-process/data-process';

export default function MyList() {
  const myList = useAppSelector(getMyFilms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(showMyFilms());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Helmet>
        <title>Мой список</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{myList.length}</span>
        </h1>
        <Profile/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CardList />
      </section>
      <Footer/>
    </div>
  );
}

