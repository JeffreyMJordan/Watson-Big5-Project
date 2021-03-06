import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from "redux-thunk";
import logger from 'redux-logger';

const configureStore = (preloadedState={}) => {
  let middlewares = [thunk, logger];
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
};

export default configureStore;