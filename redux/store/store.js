'use strict';
import { createStore } from "redux";
import rootReducer from '../reducers/rootReducer.js';

//Pre loaded state, we should get state from the app.

const store = createStore(rootReducer);

export default store;
