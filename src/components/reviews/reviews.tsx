import { ReviewProps } from '../../types/types';
import Review from '../review/review';

type ReviewTabProps = {
  active: boolean;
  reviews: ReviewProps[];
}

export default function Reviews({active, reviews}: ReviewTabProps) {
  const secondColumnStart = Math.ceil(reviews.length / 2);

  return (
    <div>
      {
        active &&
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {reviews.slice(0, secondColumnStart).map((review) => (<Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>))}
        </div>
        <div className="film-card__reviews-col">
          {reviews.slice(secondColumnStart).map((review) => (<Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>))}
        </div>
      </div>
      }
    </div>
  );
}
