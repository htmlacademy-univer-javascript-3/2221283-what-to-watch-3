import { FilmProps, HeroProps, SmallFilmProps } from '../types/types';

export const VIDEO_MOCK = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
export const heroCard: HeroProps = {
  id: '12312adsa14',
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'https://url-to-image/image.jpg',
  previewImage: 'https://url-to-image/image.jpg',
  videoLink: VIDEO_MOCK,
  genre: 'Drama',
  released: 2014,
  isFavorite: false
};

export const smallFilms: SmallFilmProps[] = [
  {
    id: '12312adsa14',
    name: 'The Grand Budapest Hotel',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama',
  },
  {
    id: '12312ads123a14',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Kids & Family'
  },
  {
    id: '1231sads2adsa14',
    name: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Documentary'
  },
  {
    id: '12asdss312adsa14',
    name: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: '1112312adsa14',
    name: 'Aviator',
    previewImage: 'img/aviator.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: '1as2312adsa14',
    name: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: '1ss2312adsa14',
    name: 'What We Do in the Shadows',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: '12312aadsa14',
    name: 'Revenant',
    previewImage: 'img/revenant.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: '12312adsa114',
    name: 'The Darjeeling Limited',
    previewImage: 'img/dardjeeling-limited.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: '12312adsa1fds4',
    name: 'Johnny English',
    previewImage: 'img/johnny-english.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: '12312adsga14',
    name: 'Midnight Special',
    previewImage: 'img/midnight-special.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Sci-Fi'
  },
  {
    id: '12a12adsa14',
    name: 'Mindhunter',
    previewImage: 'img/mindhunter.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 'adsa14',
    name: 'Orlando',
    previewImage: 'img/orlando.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Romance'
  },
  {
    id: '124',
    name: 'Pulp Fiction',
    previewImage: 'img/pulp-fiction.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Crime'
  },
  {
    id: 'aa1',
    name: 'Seven years in tibet',
    previewImage: 'img/seven-years-in-tibet.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: '1aaaaaaa2312adsa14',
    name: 'War of the worlds',
    previewImage: 'img/war-of-the-worlds.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Sci-Fi'
  }
];

export const film: FilmProps = {
  id: '123',
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffffff',
  videoLink: VIDEO_MOCK,
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: [
    'Bill Murray',
    'Mara Pa'
  ],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false
};
