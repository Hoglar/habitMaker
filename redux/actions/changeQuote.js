'use strict';
import {CHANGE_QUOTE} from './actionTypes.js';
import getRandomQuote from '../../functions/getRandomQuote.js';

export default function changeQuote() {
    return {
        type: CHANGE_QUOTE,
        payload: getRandomQuote()
    }
}
