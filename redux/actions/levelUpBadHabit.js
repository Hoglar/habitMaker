'use strict';
import {LEVEL_UP_BAD_HABIT} from './actionTypes.js';

export default function levelUpBadHabit(index) {
    return {
        type: LEVEL_UP_BAD_HABIT,
        index: index
    }
}
