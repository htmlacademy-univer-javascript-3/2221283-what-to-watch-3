export type ReviewProps = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type HeroProps = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  previewImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type SmallFilmProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type FilmProps = {
  id: string;
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
