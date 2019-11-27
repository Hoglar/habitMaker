'use strict';
import {combineReducers} from 'redux';
// actionTypes
import {CHANGE_QUOTE,
        UPDATE_STATUS,
        SAVE_NEW_GOOD_HABIT,
        SAVE_NEW_BAD_HABIT,
        COMPLETE_DAILY_BAD_HABIT,
        COMPLETE_DAILY_GOOD_HABIT,
        DECAY_HABITPOINTS_ON_START} from '../actions/actionTypes.js';


const goodHabitReducer = (state = [], action) => {
    if ( action.type === SAVE_NEW_GOOD_HABIT ) {
        return [...state, action.payload]
    }
    if ( action.type === COMPLETE_DAILY_GOOD_HABIT ) {
        let newHabitObject = [...state];
        newHabitObject[action.habitIndex].points += 1000 ;
        newHabitObject[action.habitIndex].lastUpdated = Date.now();
        newHabitObject[action.habitIndex].weekCounter -= 1;

        return newHabitObject;
    }

    if (action.type === DECAY_HABITPOINTS_ON_START) {

        let newHabitObject = [...state];
        for (i = 0; i < newHabitObject.length; i++) {
            if ((newHabitObject.points - action.decayPoints) <= 0 ) {
                console.log("habit is 0");
                newHabitObject.points = 0;
            } else {
                console.log("Decaying habit", action.decayPoints);
                newHabitObject.points -= action.decayPoints;
            }
        }
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

        return newHabitObject;
    }

    if (action.type === DECAY_HABITPOINTS_ON_START) {

        let newHabitObject = [...state];
        for (i = 0; i < newHabitObject.length; i++) {
            if ((newHabitObject.points - action.decayPoints) <= 0 ) {
                newHabitObject.points = 0;
            } else {
                newHabitObject.points -= action.decayPoints;
            }
        }
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

    return state;
}

const reducer = combineReducers({
    goodHabits: goodHabitReducer,
    badHabits: badHabitReducer,
    quote: changeQuoteReducer,
    status: updateStatusReducer
})

export default reducer;
