'use strict';
import {ADD_GOOD_HABIT} from './actionTypes.js';

// Payload?
export default function addHabit(payload) {
    return {
        type: ADD_GOOD_HABIT,
        payload,
    }
}
