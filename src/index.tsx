import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { store } from './redux/store';
import HistoryRouter from './components/history-router';
import { Provider } from 'react-redux';
import { checkAuthAction, fetchFilms } from './redux/store/api-actions';
import { browserHistory } from './browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
store.dispatch(fetchFilms());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
