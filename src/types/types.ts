export type FilmsProps = {
  id: number;
  title: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type AppProps = {
  heroFilmCard: HeroProps;
  filmsCards: FilmsProps[];
}

export type CardProps = {
  id: number;
  previewImage: string;
  name: string;
}

export type HeroProps = {
  id: number;
  title: string;
  posterImage: string;
  backgroundImage: string;
  previewImage: string;
  videoLink: string;
  genre: string;
  releaseDate: number;
  isFavorite: boolean;
}

export type AddReviewProps = {
  name: string;
  posterImage: string;
  previewImage: string;
}

export type MoviePageProps = {
  filmsCards: FilmsProps[];
}

export type CardListProps = {
  filmsCards: FilmsProps[];
}

export type MyListProps = CardListProps;

export type MainProps = AppProps;

export type VideoPlayerProps = {
  src: string;
  id: number;
  width: number;
  height: number;
};

