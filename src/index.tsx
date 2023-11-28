import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { heroCard, films } from './mocks/films';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App heroFilmCard={heroCard} filmsCards = {films}/>
    </Provider>
  </React.StrictMode>
);
