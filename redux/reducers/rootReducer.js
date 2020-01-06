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
        DELETE_GOOD_HABIT,
        LEVEL_UP_GOOD_HABIT,
        LEVEL_UP_BAD_HABIT,
        SAVE_LEVEL_UP_NOTE,
        SAVE_ACHIEVEMENT} from '../actions/actionTypes.js';


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
            for (let i = 0; i < newHabitObject.length; i++) {
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
                for (let i = 0; i < newHabitObject.length; i++) {
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

        case LEVEL_UP_GOOD_HABIT: {
            let newHabitArray = [...state];
            let i = action.index;

            newHabitArray[i] = {
                ...newHabitArray[i],
                level: newHabitArray[i].level + 1,
                difficulity: newHabitArray[i].difficulity + 0.1,
                pointsNeededToLevel: newHabitArray[i].pointsNeededToLevel * 2,
                points: 1
            }
            return newHabitArray;
        }
        case SAVE_LEVEL_UP_NOTE: {
            if(action.payload.goodOrBad === "goodHabits") {
                let newHabitArray = [...state];
                let i = action.payload.index;

                newHabitArray[i] = {
                    ...newHabitArray[i],
                    levelUpNotes: [action.payload.levelUpNote, ...newHabitArray[i].levelUpNotes]
                }

                return newHabitArray;
            }
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
            for (let i = 0; i < newHabitObject.length; i++) {
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

        case LEVEL_UP_BAD_HABIT: {
            let newHabitArray = [...state];
            let i = action.index;

            newHabitArray[i] = {
                ...newHabitArray[i],
                level: newHabitArray[i].level + 1,
                difficulity: newHabitArray[i].difficulity + 0.1,
                pointsNeededToLevel: newHabitArray[i].pointsNeededToLevel * 2,
                points: 1
            }

            return newHabitArray;
        }

        case SAVE_LEVEL_UP_NOTE: {
            if(action.payload.goodOrBad === "badHabits") {
                let newHabitArray = [...state];
                let i = action.payload.index;
                newHabitArray[i] = {
                    ...newHabitArray[i],
                    levelUpNotes: [...newHabitArray[i].levelUpNotes, action.paylpad.levelUpNote]
                }

                return newHabitArray;
            }
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

const achievementsReducer = (state = [], action) => {
    switch(action.type) {
        case SAVE_ACHIEVEMENT:
            let newAchievement = {
                title: action.payload.title,
                level: action.payload.level
            }
            let newAchievementArray = [...state].filter(achievement => achievement.title != newAchievement.title)
            return [...newAchievementArray, newAchievement]
        default:
            return state;
    }
}

const reducer = combineReducers({
    goodHabits: goodHabitReducer,
    badHabits: badHabitReducer,
    quote: changeQuoteReducer,
    status: updateStatusReducer,
    achievements: achievementsReducer
})

export default reducer;
