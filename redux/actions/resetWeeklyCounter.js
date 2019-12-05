'use strict';
import {RESET_WEEKLY_COUNTER} from './actionTypes.js';

export default function resetWeeklyCounter() {
    return {
        type: RESET_WEEKLY_COUNTER,
    }
}
