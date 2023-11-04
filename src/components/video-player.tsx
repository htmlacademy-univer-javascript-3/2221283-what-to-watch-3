import { useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { VideoPlayerProps } from '../types/types';

export default function VideoPlayer({src, id, width, height}: VideoPlayerProps) {
  const videoRef = useRef(document.createElement('video'));
  useEffect(() => {
    videoRef.current.src = src;
  }, [src]);

  function playMovie(event: MouseEvent<HTMLVideoElement> & {
    target: HTMLVideoElement;
  }): void {
    if (!event.target) {
      return;
    }
    event.target.play();
  }

  function stopMovie(event: MouseEvent<HTMLVideoElement> & {
    target: HTMLVideoElement;
  }): void {
    if (!event.target) {
      return;
    }
    event.target.pause();
  }

  return (
    <Link className="small-film-card__link" to={`/films/${id}`}>
      <video
        onMouseEnter={playMovie}
        onMouseOut={stopMovie}
        loop muted ref={videoRef} controls={false} width={width} height={height}
      />
    </Link>
  );
}
