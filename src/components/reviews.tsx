type ReviewComponentProps = {
  comment: string;
  date: string;
  user: string;
  rating: number;
}

export default function Review({comment, date, user, rating}: ReviewComponentProps) {
  const strDate = new Date(date);
  const normalDate = strDate.toISOString().substring(0, 10);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={normalDate}>
            {normalDate}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}
