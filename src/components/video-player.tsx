import { useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type VideoPlayerProps = {
  src: string;
  id: number;
  width: number;
  height: number;
  poster: string;
  name:string;
}

export default function VideoPlayer({src, id, width, height, poster, name}: VideoPlayerProps) {
  const videoRef = useRef(document.createElement('video'));
  const [timeout, setTime] = useState<number>();
  useEffect(()=>{
    videoRef.current.src = src;
  }, [src]);

  function playMovie(event: MouseEvent<HTMLVideoElement> & {
    target: HTMLVideoElement;
     }): void {
    if (!event.target) {
      return;
    }
    const timeOutId = window.setTimeout(() => {
      event.target.play();
    }, 1000);
    setTime(timeOutId);
  }

  function stopMovie(event: MouseEvent<HTMLVideoElement> & {
    target: HTMLVideoElement;
     }): void {
    if (!event.target) {
      return;
    }
    clearTimeout(timeout);
    event.target.pause();
    event.target.load();
  }


  return (
    <Link className="small-film-card__link" to={`/films/${id}`}>
      <video
        onMouseOver={playMovie}
        onMouseOut={stopMovie}
        loop muted ref={videoRef} controls={false} width={width} height={height}
        poster={poster}
      />
      <h3 className="small-film-card__title">
        {name}
      </h3>
    </Link>
  );
}
