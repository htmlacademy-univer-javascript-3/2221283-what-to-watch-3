import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { heroCard, films, smallFilms } from './mocks/films';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { fetchFilmAction } from './redux/store/api-actions';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilmAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App heroFilmCard={heroCard} filmCards = {films} smallFilmCards = {smallFilms} reviews = {reviews}/>
    </Provider>
  </React.StrictMode>
);
