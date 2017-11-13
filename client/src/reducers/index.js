// reducers/index.js

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    LOGIN_USER
} from '../actions';

const login = (state = {
    status: false
}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                status: true
            }
        default:
            return state;
    }
}

const bookClub = combineReducers({
    router: routerReducer,
    login
});

export default bookClub;
