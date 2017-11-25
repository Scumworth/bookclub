// reducers/index.js

import {
    LOGIN_USER,
    APPLY_SETTINGS,
    REQUEST_ALL_BOOKS,
    RECEIVE_ALL_BOOKS,
    REQUEST_MY_BOOKS,
    RECEIVE_MY_BOOKS,
    SELECT_TITLE
} from '../actions';

export const login = (state = {
    status: false,
    userName: null
}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                status: true,
                userName: action.user
            }
        default:
            return state;
    }
}

//below code makes @@router/LOCATION_CHANGE action result in rerender
export const location = (state = {
    url: "/"
}, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                url: action.payload.pathname
            }
         default:
            return state;
    }
}   

export const settings = (state = {
}, action) => {
    switch (action.type) {
        case APPLY_SETTINGS:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                city: action.city,
                geoState: action.geoState
            }
         default:
            return state;
    }
}

export const book = (state = {
    title: null,
}, action) => {
    switch (action.type) {
        case SELECT_TITLE:
            return {
                ...state,
                title: action.title
            }
        default:
            return state;
    }
}
