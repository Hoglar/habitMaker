'use strict';
import {DELETE_BAD_HABIT} from './actionTypes.js';

export default function deleteBadHabit(index) {
    return {
        type: DELETE_BAD_HABIT,
        index: index
    }
}
