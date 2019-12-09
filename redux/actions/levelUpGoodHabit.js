'use strict';
import {LEVEL_UP_GOOD_HABIT} from './actionTypes.js';

export default function levelUpGoodHabit(index) {
    return {
        type: LEVEL_UP_GOOD_HABIT,
        index: index
    }
}
