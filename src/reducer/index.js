import { combineReducers } from 'redux';
import action from './actions.js';

const ADD = "ADD";

const messageReducer = (state = {}, action) => {
    switch (action.type){
        case ADD:
            return [...state, action.message];
        default:
            return state;
    }
}

export default messageReducer;