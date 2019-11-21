'use strict';
import { createStore } from "redux";
import reducer from '../reducers/rootReducer.js';

//Pre loaded state, we should get state from the app.

const preLoadedState = {
    goodHabits: [
        {title: "Clean everyday"}
    ],
    badHabits: [],
    quote: {},
    status: {
        lastOnline: "Last time logged inn",
        decayPoints: "currentDate - last online"
    }
};

const store = createStore(reducer, preLoadedState);

export default store;
