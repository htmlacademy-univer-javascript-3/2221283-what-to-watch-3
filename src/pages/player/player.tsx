import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilm } from '../../redux/store/data-process/data-selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { fetchFilm } from '../../redux/store/api-actions';
import Spinner from '../../components/spinner/spinner';

export default function Player() {
  const params = useParams();
  const id = params.id;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if(id){
      dispatch(fetchFilm(id));
    }
  },[dispatch,id]);


  const film = useAppSelector(getFilm);

  const togglePlay = () => {
    if (videoRef.current){
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (videoRef.current){
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const getFilmDuration = () => {
    const video = videoRef.current;
    if (!video || !film) {
      return 0;
    }
    return video.duration;
  };

  const getFilmCurrentTime = () => {
    const video = videoRef.current;
    if (!video) {
      return 0;
    }
    return video.currentTime;
  };

  const getTimeLeft = (leftTime: number) => {
    const hours = Math.floor(leftTime / 60 / 60);
    const minutes = Math.floor((leftTime % 3600) / 60);
    const seconds = Math.floor(leftTime % 60);
    if (hours) {
      return `-${hours}:${minutes}:${seconds}`;
    }
    return `-${minutes}:${seconds}`;
  };

  function handleExit(): void {
    navigate(-1);
  }

  function onTimeUpdateVideo(): void {
    setCurrentTime(getFilmCurrentTime());
  }

  return film ? (
    <div className="player">
      <Helmet>
        <title>{film.name}</title>
      </Helmet>
      <video ref={videoRef} width="1200" height="800" src={film.videoLink} className="player__video" poster={film.posterImage} onTimeUpdate={onTimeUpdateVideo}/>

      <button onClick={handleExit} type="button" className="player__exit" data-testid='exitButton'>
        Exit
      </button>

      <div className="player__controls">

        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTime} max={getFilmDuration()} />
            <div className="player__toggler" style={{ left: `${(currentTime / getFilmDuration()) * 100}%` }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getTimeLeft(getFilmDuration() - currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={togglePlay} data-testid='play-button'>
            <svg viewBox="0 0 19 19" width={19} height={19}>
              {isPlaying ? <use xlinkHref="#pause" /> : <use xlinkHref="#play-s" />}
            </svg>
            <span>{isPlaying ? 'Stop' : 'Play'}</span>
          </button>

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={toggleFullscreen}>
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>

        </div>

      </div>
    </div>
  ) : (<Spinner/>);
}
