import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import { AddReviewProps } from '../../types/types';
import FormReview from '../../components/form-review';

function AddReview({name, previewImage, posterImage}: AddReviewProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>WTW. Оставить комментарий</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img
              src={previewImage}
              alt={name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a onClick={() => navigate(-1)} className="breadcrumbs__link">
                    {name}
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
              src={posterImage}
              alt={name}
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
