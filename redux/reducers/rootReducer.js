'use strict';
import {combineReducers} from 'redux';
// actionTypes
import {ADD_GOOD_HABIT, CHANGE_QUOTE} from '../actions/actionTypes.js';


const habitReducer = (state = [], action) => {
    if ( action.type === ADD_GOOD_HABIT ) {
        return [...state, action.payload]
    }
    return state;
}

const changeQuoteReducer = (state = {}, action) => {
    if ( action.type === CHANGE_QUOTE ) {
        return action.payload
    }

    return state;
}

const reducer = combineReducers({
    goodHabits: habitReducer,
    badHabits: habitReducer,
    quote: changeQuoteReducer
})

export default reducer;
