import { Link } from 'react-router-dom';
import { CardProps} from '../types/types';

export default function Card({id, previewImage, name}: CardProps): JSX.Element {
  return (
    <>
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </>
  );
}
