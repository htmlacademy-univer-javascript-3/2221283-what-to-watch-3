import {store} from '.';

import {setError, setValidationError} from './action';
import {clearErrorAction} from './api-actions';


export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  if (message === 'Validation error: \'/wtw/login\''){
    store.dispatch(setValidationError(true));
  }

  store.dispatch(clearErrorAction());
};
