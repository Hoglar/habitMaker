'use strict';
import {ADD_HABIT} from './actionTypes.js';

// Payload?
export default function addHabit(payload) {
    return {
        type: ADD_HABIT,
        payload,
    }
}
