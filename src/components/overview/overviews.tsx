type OverviewProps = {
  director: string;
  starring: string[];
  scoresCount: number;
  description: string;
  rating: number;
  active: boolean;
  textRating: string;
}

function Overview({rating, textRating, scoresCount, active, description, director, starring}: OverviewProps) {
  return (
    <div>
      {active &&
      <>
        <div className="film-rating">
          <div className="film-rating__score">{rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">{textRating}</span>
            <span className="film-rating__count">{scoresCount} ratings</span>
          </p>
        </div>
        <div className="film-card__text">
          <p>
            {description}
          </p>
          <p className="film-card__director">
            <strong>Director: {director}</strong>
          </p>
          <p className="film-card__starring">
            <strong>
                Starring: {starring && starring.join(', ')}
            </strong>
          </p>
        </div>
      </>}
    </div>
  );
}

export default Overview;
