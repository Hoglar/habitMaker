'use strict';
// actionTypes
import {ADD_HABIT} from '../actions/actionTypes.js';

const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {
    if ( action.type === ADD_HABIT ) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }

    return state;
}

export default rootReducer;
