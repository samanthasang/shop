import thunk from 'redux-thunk';
import {applyMiddleware, createStore, compose} from 'redux';
import appReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
