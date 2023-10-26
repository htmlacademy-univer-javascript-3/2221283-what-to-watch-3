import { FilmsProps, HeroProps } from '../types/types';

const VIDEO_MOCK = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

export const films: FilmsProps[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Kids & Family'
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Documentary'
  },
  {
    id: 3,
    title: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: 4,
    title: 'Aviator',
    previewImage: 'img/aviator.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: 7,
    title: 'Revenant',
    previewImage: 'img/revenant.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 8,
    title: 'Johnny English',
    previewImage: 'img/johnny-english.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  }
];

export const heroCard: HeroProps = {
  id: 0,
  title: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'https://url-to-image/image.jpg',
  previewImage: 'https://url-to-image/image.jpg',
  videoLink: VIDEO_MOCK,
  genre: 'Drama',
  releaseDate: 2014,
  isFavorite: false
};
