import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { reducer } from './reducer';

const middlewares = [];

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

middlewares.push(thunk);

const logger = createLogger({ duration: true, diff: true });
middlewares.push(logger);
console.log('[REDUX] Redux logger added!');

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducer, undefined, enhancer);

export { store };
