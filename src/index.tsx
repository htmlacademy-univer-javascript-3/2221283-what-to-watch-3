import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type MainFilmCardProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

const mainProps: MainFilmCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
};

root.render(
  <React.StrictMode>
    <App title={mainProps.title} genre={mainProps.genre} releaseDate={mainProps.releaseDate}/>
  </React.StrictMode>
);
