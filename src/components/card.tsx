import { Link } from 'react-router-dom';
import { CardProps} from '../types/types';
import VideoPlayer from './video-player';
import { useRef, useState } from 'react';
import { VIDEO_MOCK } from '../mocks/films';

export default function Card({id, previewImage, name}: CardProps): JSX.Element {
  const [width, height] = [280, 175];
  const [isPlaying, setPlaying] = useState(false);
  const timerRef: {current: NodeJS.Timeout | null} = useRef(null);

  const onMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setPlaying(true);
    }, 1000);
  };

  const onMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setPlaying(false);
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{isPlaying ? (
      <VideoPlayer src={VIDEO_MOCK} id={id} width={width} height={height}/>
    ) : (
      <Link className="small-film-card__link" to={`/films/${id}`}>
        <div className="small-film-card__image">
          <img
            src={previewImage}
            alt={name}
            width={width}
            height={height}
          />
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    )}
    </div>
  );
}
