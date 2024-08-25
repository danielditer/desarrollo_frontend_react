import { createStore, applyMiddleware } from 'redux';

// aca importamos nuestro reducer
import rootReducer from './reducers';
import {thunk} from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

// Chrome Redux DevTools
/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /!* preloadedState, *!/ composeEnhancers(
    applyMiddleware(thunk)
));
*/

export default store;
