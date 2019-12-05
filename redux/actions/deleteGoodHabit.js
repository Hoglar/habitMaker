'use strict';
import {DELETE_GOOD_HABIT} from './actionTypes.js';

export default function deleteGoodHabit(index) {
    return {
        type: DELETE_GOOD_HABIT,
        index: index
    }
}
