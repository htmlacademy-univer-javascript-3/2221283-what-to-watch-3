export type FilmsProps = {
  id: number;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
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
  filmsCards: FilmsProps[];
}

export type MoviePageProps = {
  filmsCards: FilmsProps[];
}

export type CardListProps = {
  filmsCards: FilmsProps[];
  genre: string;
}

export type MyListProps = CardListProps;

export type MainProps = {
  heroFilmCard: HeroProps;
};

export type VideoPlayerProps = {
  src: string;
  id: number;
  width: number;
  height: number;
};

export type ReviewProps = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type PlayerProps = {
  filmsCards: FilmsProps[];
}
