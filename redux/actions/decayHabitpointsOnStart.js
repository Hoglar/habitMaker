'use strict';
import {DECAY_HABITPOINTS_ON_START} from './actionTypes.js';

// Payload?
export default function decayHabitpointsOnStart(decayPoints) {
    return {
        type: DECAY_HABITPOINTS_ON_START,
        decayPoints: decayPoints
    }
}
