'use strict';
import {COMPLETE_DAILY_BAD_HABIT} from './actionTypes.js';

export default function completeDailyBadHabit(habitIndex) {
    return {
        type: COMPLETE_DAILY_BAD_HABIT,
        habitIndex: habitIndex
    }
}
