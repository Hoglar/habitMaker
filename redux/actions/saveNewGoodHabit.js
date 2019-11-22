'use strict';
import {SAVE_NEW_GOOD_HABIT} from './actionTypes.js';

export default function saveNewGoodHabit(payload) {
    return {
        type: SAVE_NEW_GOOD_HABIT,
        payload: {
            ...payload,
            weekCounter: 1,
            timeOfCreation: Date.now(),
            lastUpdated: "datoen sist denne ble opdatert",
            level: 1,
            difficulity: "number that modify decay rate",
            pointsNeededToLevel: "number",
            points: ""

        }
    }
}
