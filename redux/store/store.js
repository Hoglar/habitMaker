'use strict';
import { createStore } from "redux";
import rootReducer from '../reducers/rootReducer.js';


//Pre loaded state, we should get state from the app.

const preLoadedState = 0;

const store = createStore(rootReducer, preLoadedState);

export default store;
