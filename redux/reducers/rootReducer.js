'use strict';
import {combineReducers} from 'redux';
// actionTypes
import {CHANGE_QUOTE,
        UPDATE_STATUS,
        SAVE_NEW_GOOD_HABIT,
        SAVE_NEW_BAD_HABIT,
        COMPLETE_DAILY_BAD_HABIT,
        COMPLETE_DAILY_GOOD_HABIT,
        FIRST_LOGIN_STATUS_UPDATE} from '../actions/actionTypes.js';


const goodHabitReducer = (state = [], action) => {
    if ( action.type === SAVE_NEW_GOOD_HABIT ) {
        return [...state, action.payload]
    }
    if ( action.type === COMPLETE_DAILY_GOOD_HABIT ) {
        let newHabitObject = [...state];
        newHabitObject[action.habitIndex].points += 1000 ;
        newHabitObject[action.habitIndex].lastUpdated = Date.now();
        newHabitObject[action.habitIndex].weekCounter -= 1;

        console.log(newHabitObject)
        return newHabitObject;
    }
    return state;
}

const badHabitReducer = (state = [], action) => {
    if ( action.type === SAVE_NEW_BAD_HABIT ) {
        return [...state, action.payload]
    }
    if ( action.type === COMPLETE_DAILY_BAD_HABIT ) {
        let newHabitObject = [...state];
        newHabitObject[action.habitIndex].points += 1000 ;
        newHabitObject[action.habitIndex].lastUpdated = Date.now();
        newHabitObject[action.habitIndex].weekCounter -= 1;

        console.log(newHabitObject)
        return newHabitObject;
    }

    return state;
}

const changeQuoteReducer = (state = {}, action) => {
    if ( action.type === CHANGE_QUOTE ) {
        return action.payload
    }

    return state;
}

const updateStatusReducer = (state = {}, action) => {
    if ( action.type === UPDATE_STATUS ) {
        return {
            decayPoints: Date.now() - state.lastOnline,
            lastOnline: Date.now()
        }
    }

    if ( action.type === FIRST_LOGIN_STATUS_UPDATE) {
        return {
            decayPoints: 0,
            lastOnline: Date.now()
        }
    }

    return state;
}

const reducer = combineReducers({
    goodHabits: goodHabitReducer,
    badHabits: badHabitReducer,
    quote: changeQuoteReducer,
    status: updateStatusReducer
})

export default reducer;
