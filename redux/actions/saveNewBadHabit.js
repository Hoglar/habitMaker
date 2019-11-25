'use strict';
import {SAVE_NEW_BAD_HABIT} from './actionTypes.js';

// Payload?
export default function addHabit(payload) {
    return {
        type: SAVE_NEW_BAD_HABIT,
        payload: {
            ...payload

        }
    }
}
