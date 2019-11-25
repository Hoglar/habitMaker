'use strict';
import {COMPLETE_DAILY_GOOD_HABIT} from './actionTypes.js';

export default function completeDailyGoodHabit(habitIndex) {
    return {
        type: COMPLETE_DAILY_GOOD_HABIT,
        habitIndex: habitIndex
    }
}
