import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState, reducers) {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') middleware.push(logger);

  // create store:
  return createStore(rootReducer(reducers), initialState, applyMiddleware(...middleware));
}
