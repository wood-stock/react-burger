import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers';
import { socketMiddleware } from './services/middleware';
import { wsActions } from './services/actions/ws';
import { wsPrivateActions } from './services/actions/ws-private';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware('wss://norma.nomoreparties.space/orders/all', wsActions, false), socketMiddleware('wss://norma.nomoreparties.space/orders', wsPrivateActions, true)));
export const store = createStore(rootReducer, enhancer);
