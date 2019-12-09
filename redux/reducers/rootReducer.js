'use strict';
import {combineReducers} from 'redux';
import getTodayDate from '../../functions/getTodayDate.js';
import getNextMonday from '../../functions/getNextMonday.js';
// actionTypes
import {CHANGE_QUOTE,
        UPDATE_STATUS,
        SAVE_NEW_GOOD_HABIT,
        SAVE_NEW_BAD_HABIT,
        COMPLETE_DAILY_BAD_HABIT,
        COMPLETE_DAILY_GOOD_HABIT,
        DECAY_HABITPOINTS_ON_START,
        RESET_WEEKLY_COUNTER,
        DELETE_BAD_HABIT,
        DELETE_GOOD_HABIT} from '../actions/actionTypes.js';


const goodHabitReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_NEW_GOOD_HABIT:
            return [...state, action.payload]

        case COMPLETE_DAILY_GOOD_HABIT: {
            let newHabitObject = [...state];
            let i = action.habitIndex

            newHabitObject[i] = {
                ...newHabitObject[i],
                points: newHabitObject[i].points + 172800,
                lastUpdated: getTodayDate(),
                weekCounter: newHabitObject[i].weekCounter - 1
            }
            return newHabitObject;
        }

        case DECAY_HABITPOINTS_ON_START: {
            let newHabitObject = [...state];
            for (i = 0; i < newHabitObject.length; i++) {
                let modifiedDecayPoints = ((Math.floor(action.decayPoints * newHabitObject[i].difficulity)) / 7) * newHabitObject[i].weekCounterLimit;
                if ((newHabitObject[i].points - modifiedDecayPoints) <= 0 ) {
                    newHabitObject[i].points = 0;
                } else {

                    newHabitObject[i].points -= modifiedDecayPoints;
                }
            }
            return newHabitObject;
        }
        case RESET_WEEKLY_COUNTER: {
            let newHabitObject = [...state];
            if(newHabitObject.length > 0) {
                for (i = 0; i < newHabitObject.length; i++) {
                    newHabitObject[i].weekCounter = newHabitObject[i].weekCounterLimit;
                }
            }

            return newHabitObject;
        }

        case DELETE_GOOD_HABIT: {
            let newHabitArray = [...state];
            newHabitArray.splice(action.index, 1)

            return newHabitArray;
        }

        default:
            return state;
    }
}

const badHabitReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_NEW_BAD_HABIT:
            return [...state, action.payload]

        case COMPLETE_DAILY_BAD_HABIT: {
            let newHabitObject = [...state];
            let i = action.habitIndex
            newHabitObject[i] = {
                ...newHabitObject[i],
                points: newHabitObject[i].points + 172800,
                lastUpdated: getTodayDate(),
                weekCounter: newHabitObject[i].weekCounter - 1
            }
            return newHabitObject;
        }
        case DECAY_HABITPOINTS_ON_START: {
            let newHabitObject = [...state];
            for (i = 0; i < newHabitObject.length; i++) {
                let modifiedDecayPoints = ((Math.floor(action.decayPoints * newHabitObject[i].difficulity)) / 7) * newHabitObject[i].weekCounterLimit;
                if ((newHabitObject[i].points - modifiedDecayPoints) <= 0 ) {
                    newHabitObject[i].points = 0;
                } else {

                    newHabitObject[i].points -= modifiedDecayPoints;
                }
            }
            return newHabitObject;
        }
        case RESET_WEEKLY_COUNTER: {
            let newHabitObject = [...state];
            if(newHabitObject.length > 0) {
                for (i = 0; i < newHabitObject.length; i++) {
                    newHabitObject[i].weekCounter = newHabitObject[i].weekCounterLimit;
                }
            }

            return newHabitObject;
        }

        case DELETE_BAD_HABIT: {
            let newHabitArray = [...state];
            newHabitArray.splice(action.index, 1)

            return newHabitArray;
        }

        default:
            return state;
    }
}

const changeQuoteReducer = (state = {}, action) => {
    switch(action.type) {
        case CHANGE_QUOTE:
            return action.payload
        default:
            return state;
    }
}

const updateStatusReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_STATUS:
            return {
                // This will ensure that we decay about the same rate as seconds in a day
                decayPoints: Math.floor((Date.now() - state.lastOnline) / 1000),
                lastOnline: Date.now(),
                nextWeeklyCounterReset: state.nextWeeklyCounterReset
            }
        case RESET_WEEKLY_COUNTER:
            return {...state, nextWeeklyCounterReset: getNextMonday()}

        default:
            return state;
    }
}

const reducer = combineReducers({
    goodHabits: goodHabitReducer,
    badHabits: badHabitReducer,
    quote: changeQuoteReducer,
    status: updateStatusReducer
})

export default reducer;
