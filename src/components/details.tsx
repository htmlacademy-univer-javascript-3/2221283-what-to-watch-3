type DetailsProps = {
  director: string | undefined;
  starring: string[] | undefined;
  runtime: number | undefined;
  genre: string | undefined;
  released: number | undefined;
  active: boolean | undefined;
}

export default function Details({director, starring, runtime, genre, released, active}: DetailsProps) {
  runtime = runtime ? runtime : 0;
  const hours = runtime && Math.floor(runtime / 60);
  const minutes = runtime && runtime % 60;
  const runtimeliteral = `${hours}h ${minutes}m`;
  return (
    <div>
      {active &&
    <div className="film-card__text film-card__row tab">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring && starring.map((x) => (
              <div key={x}>{x} <br /></div>
            ))}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runtimeliteral}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>}
    </div>
  );
}
