'use strict';
import {SAVE_LEVEL_UP_NOTE} from './actionTypes.js';

export default function saveLevelUpNote(payload) {
    return {
        type: SAVE_LEVEL_UP_NOTE,
        payload
    }
}
