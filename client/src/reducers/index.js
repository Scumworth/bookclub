// reducers/index.js

import {
    LOGIN_USER,
    APPLY_SETTINGS,
    REQUEST_ALL_BOOKS,
    RECEIVE_ALL_BOOKS,
    REQUEST_MY_BOOKS,
    RECEIVE_MY_BOOKS,
    SELECT_TITLE,
    SELECT_FIRST_NAME,
    SELECT_LAST_NAME,
    SELECT_GEO_STATE,
    SELECT_CITY,
    REQUEST_MY_REQUESTS,
    RECEIVE_MY_REQUESTS,
    REQUEST_ALL_REQUESTS,
    RECEIVE_ALL_REQUESTS,
    CHANGE_SETTINGS
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
    firstName: null,
    lastName: null,
    city: null,
    geoState: null,
    settingsChange: false,
}, action) => {
    switch (action.type) {
         case SELECT_FIRST_NAME:
            return {
                ...state,
                firstName: action.firstName
            }
         case SELECT_LAST_NAME:
            return {
                ...state,
                lastName: action.lastName
            }
         case SELECT_CITY:
            return {
                ...state,
                city: action.city
            }
         case SELECT_GEO_STATE:
            return {
                ...state,
               geoState: action.geoState
            }
         case CHANGE_SETTINGS:
            return {
                ...state,
                settingsChanged: true
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

export const allBooks = (state = {
    allBooksLoaded: false,
    isFetchingAllBooks: false,
    allBooksResults: []
}, action) => {
    switch (action.type) {
        case REQUEST_ALL_BOOKS:
            return {
                ...state,
                isFetchingAllBooks: true
            }
        case RECEIVE_ALL_BOOKS:
            return {
                ...state,
                isFetchingAllBooks: false,
                allBooksLoaded: true,
                allBooksResults: action.allBooksResults
            }
        default:
            return state;
    }
}

export const myBooks = (state = {
    myBooksLoaded: false,
    isFetchingMyBooks: false,
    myBooksResults: []
}, action) => {
    switch (action.type) {
        case REQUEST_MY_BOOKS:
            return {
                ...state,
                isFetchingMyBooks: true
            }
        case RECEIVE_MY_BOOKS:
            return {
                ...state,
                isFetchingMyBooks: false,
                myBooksLoaded: true,
                myBooksResults: action.myBooksResults
            }
         default: 
            return state;
    }
}

export const myRequests = (state = {
    myRequestsLoaded: false,
    isFetchingMyRequests: false,
    myRequestsResults: []
}, action) => {
    switch (action.type) {
        case REQUEST_MY_REQUESTS:
            return {
                ...state,
                isFetchingMyRequests: true
            }
        case RECEIVE_MY_REQUESTS:
            return {
                ...state,
                isFetchingMyRequests: false,
                myRequestsLoaded: true,
                myRequestsResults: action.myRequestsResults
            }
        default: 
            return state;
    }
}

export const allRequests = (state = {
    allRequestsLoaded: false,
    isFetchingAllRequests: false,
    allRequestsResults: []
}, action) => {
   switch (action.type) {
        case REQUEST_ALL_REQUESTS:
           return {
                ...state,
                isFetchingAllRequests: true
            }
        case RECEIVE_ALL_REQUESTS:
           return {
               ...state,
               isFetchingAllRequests: false,
               allRequestsLoaded: true,
               allRequestsResults: action.allRequestsResults
           }
        default:
           return state;
    }
}







