import { FilmsProps, HeroProps, SmallFilmProps } from '../types/types';

export const VIDEO_MOCK = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
export const heroCard: HeroProps = {
  id: 0,
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
    id: 1,
    name: 'The Grand Budapest Hotel',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama',
  },
  {
    id: 2,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Kids & Family'
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Documentary'
  },
  {
    id: 4,
    name: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: 5,
    name: 'Aviator',
    previewImage: 'img/aviator.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: 6,
    name: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 7,
    name: 'What We Do in the Shadows',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: 8,
    name: 'Revenant',
    previewImage: 'img/revenant.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 9,
    name: 'The Darjeeling Limited',
    previewImage: 'img/dardjeeling-limited.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: 10,
    name: 'Johnny English',
    previewImage: 'img/johnny-english.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: 11,
    name: 'Midnight Special',
    previewImage: 'img/midnight-special.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Sci-Fi'
  },
  {
    id: 12,
    name: 'Mindhunter',
    previewImage: 'img/mindhunter.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 13,
    name: 'Orlando',
    previewImage: 'img/orlando.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Romance'
  },
  {
    id: 14,
    name: 'Pulp Fiction',
    previewImage: 'img/pulp-fiction.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Crime'
  },
  {
    id: 15,
    name: 'Seven years in tibet',
    previewImage: 'img/seven-years-in-tibet.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: 16,
    name: 'War of the worlds',
    previewImage: 'img/war-of-the-worlds.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Sci-Fi'
  }
];

export const films: FilmsProps[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'Fantastic Beasts: The Crimes of Grindelwaldl',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Kids & Family',
    released: 2014,
    isFavorite: false
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Documentary',
    released: 2014,
    isFavorite: false
  },
  {
    id: 4,
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false
  },
  {
    id: 6,
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Thriller',
    released: 2014,
    isFavorite: false
  },
  {
    id: 7,
    name: 'What We Do in the Shadows',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false
  },
  {
    id: 8,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Thriller',
    released: 2014,
    isFavorite: false
  },
  {
    id: 9,
    name: 'The Darjeeling Limited',
    posterImage: 'img/dardjeeling-limited.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false
  },
  {
    id: 10,
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false
  },
  {
    id: 11,
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Sci-Fi',
    released: 2014,
    isFavorite: false
  },
  {
    id: 12,
    name: 'Mindhunter',
    posterImage: 'img/mindhunter.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Thriller',
    released: 2014,
    isFavorite: false
  },
  {
    id: 13,
    name: 'Orlando',
    posterImage: 'img/orlando.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Romance',
    released: 2014,
    isFavorite: false
  },
  {
    id: 14,
    name: 'Pulp Fiction',
    posterImage: 'img/pulp-fiction.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Crime',
    released: 2014,
    isFavorite: false
  },
  {
    id: 15,
    name: 'Seven years in tibet',
    posterImage: 'img/seven-years-in-tibet.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false
  },
  {
    id: 16,
    name: 'War of the worlds',
    posterImage: 'img/war-of-the-worlds.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: VIDEO_MOCK,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Sci-Fi',
    released: 2014,
    isFavorite: false
  }
];
