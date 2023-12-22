import VideoPlayer from '../video-player/video-player';

type CardProps = {
  id: string;
  previewImage:string;
  name:string;
  previewVideoLink: string;
}

export default function Card({id, previewImage, name, previewVideoLink}: CardProps) {
  const [width,height] = [280,175];
  return (
    <VideoPlayer src={previewVideoLink} id={id} width={width} height={height} poster={previewImage} name={name}/>
  );
}
