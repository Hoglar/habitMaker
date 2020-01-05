'use strict';
import {SAVE_ACHIEVEMENT} from './actionTypes.js';

export default function saveAchievement(payload) {
    return {
        type: SAVE_ACHIEVEMENT,
        payload: payload
    }
}
