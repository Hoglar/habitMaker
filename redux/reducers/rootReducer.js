'use strict';
// actionTypes
import {ADD_GOOD_HABIT, CHANGE_QUOTE} from '../actions/actionTypes.js';

export const preLoadedState = {
    goodHabits: [],
    badHabits: [],
    quote: {}
};

function rootReducer(state = preLoadedState, action) {
    if ( action.type === ADD_GOOD_HABIT ) {
        return Object.assign({}, state, {
            goodHabits: state.goodHabits.concat(action.payload)
        })
    }

    if ( action.type === CHANGE_QUOTE ) {
        return Object.assign({}, state, {
            quote: action.payload
        })
    }

    return state;
}

export default rootReducer;
