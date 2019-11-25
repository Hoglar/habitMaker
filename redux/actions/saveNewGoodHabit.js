'use strict';
import {SAVE_NEW_GOOD_HABIT} from './actionTypes.js';

export default function saveNewGoodHabit(payload) {
    return {
        type: SAVE_NEW_GOOD_HABIT,
        payload: {
            ...payload

        }
    }
}
