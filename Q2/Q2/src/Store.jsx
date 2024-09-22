// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

// Use compose for applying multiple middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger)) // Apply both thunk and logger
);

export default Store;
