/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Helmet} from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { PlayerProps } from '../../types/types';

export default function Player({filmsCards}: PlayerProps): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id ? parseInt(params.id, 10) : 1;
  const film = filmsCards.find((x) => x.id === id);
  return (
    <>
      <Helmet>
        <title>WTW. Просмотр фильма</title>
      </Helmet>
      <div className="player">
        <video src="#" className="player__video" poster="img/player-poster.jpg" />
        <button onClick={() => navigate(-1)} type="button" className="player__exit">
          Exit
        </button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={30} max={100} />
              <div className="player__toggler" style={{ left: '30%' }}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{film?.runTime}</div>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
