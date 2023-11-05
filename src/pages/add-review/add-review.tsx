/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Helmet} from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import { AddReviewProps } from '../../types/types';
import FormReview from '../../components/form-review';

function AddReview({filmsCards}: AddReviewProps): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id ? parseInt(params.id, 10) : 1;
  const film = filmsCards.find((x) => x.id === id);
  return (
    <>
      <Helmet>
        <title>WTW. Оставить комментарий</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img
              src={film?.backgroundImage}
              alt={film?.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a onClick={() => navigate(-1)} className="breadcrumbs__link">
                    {film?.name}
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <Profile />
          </header>
          <div className="film-card__poster film-card__poster--small">
            <img
              src={film?.posterImage}
              alt={film?.name}
              width={218}
              height={327}
            />
          </div>
        </div>
        <FormReview />
      </section>
    </>
  );
}

export default AddReview;
