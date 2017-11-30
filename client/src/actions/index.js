// actions/index.js
import axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';
export const APPLY_SETTINGS = 'APPLY_SETTINGS';
export const REQUEST_ALL_BOOKS = 'REQUEST_ALL_BOOKS';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const REQUEST_MY_BOOKS = 'REQUEST_MY_BOOKS';
export const RECEIVE_MY_BOOKS = 'RECEIVE_MY_BOOKS];'
export const SELECT_TITLE = 'SELECT_TITLE';
export const REQUEST_MY_REQUESTS = 'REQUEST_MY_REQUESTS';
export const RECEIVE_MY_REQUESTS = 'RECEIVE_MY_REQUESTS';
export const REQUEST_ALL_REQUESTS = 'REQUEST_ALL_REQUESTS';
export const RECEIVE_ALL_REQUESTS = 'RECEIVE_ALL_REQUESTS';
export const SELECT_CITY = 'SELECT_CITY';
export const SELECT_GEO_STATE = 'SELECT_GEO_STATE';
export const SELECT_FIRST_NAME = 'SELECT_FIRST_NAME';
export const SELECT_LAST_NAME = 'SELECT_LAST_NAME';
export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';

export const login = (user) => ({
    type: LOGIN_USER,
    user
});

export const applySettings = (firstName, lastName, city, geoState) => ({
    type: APPLY_SETTINGS,
    firstName,
    lastName,
    city,
    geoState
});

export const changeSettings = () => ({
    type: CHANGE_SETTINGS
});

export const requestAllBooks = () => ({
    type: REQUEST_ALL_BOOKS
});

export const receiveAllBooks = (data) => ({
    type: RECEIVE_ALL_BOOKS,
    allBooksResults: data.map(book => ({...book}))
});

export const getAllBooks = (baseUrl) => dispatch => {
    dispatch(requestAllBooks);
    axios.get(`${baseUrl}/allbooks`)
        .then(res => {
            return res.data
        }, e => console.log(e))
        .then(data => {
            dispatch(receiveAllBooks(data));
        });

}

export const requestMyBooks = () => ({
    type: REQUEST_MY_BOOKS
});

export const receiveMyBooks = (data) => ({
    type: RECEIVE_MY_BOOKS,
    myBooksResults: data.map(book => ({...book}))
});

export const getMyBooks = (baseUrl, userName) => dispatch => {
    dispatch(requestMyBooks);
    axios.get(`${baseUrl}/mybooks`, {
        params: {userName: userName}
    })
        .then(res => {
            return res.data
        }, e => console.log(e))
        .then(data => {
            dispatch(receiveMyBooks(data));
        });
}

export const requestMyRequests = () => ({
    type: REQUEST_MY_REQUESTS
});

export const receiveMyRequests = (data) => ({
    type: RECEIVE_MY_REQUESTS,
    myRequestsResults: {...data}
});

export const getMyRequests = (baseUrl, userName) => dispatch => {
    dispatch(requestMyRequests);
    axios.get(`${baseUrl}/myrequests`, {
        params: {userName: userName}
    })
        .then(res => {
            return res.data
        }, e => console.log(e))
        .then(data => {
            dispatch(receiveMyRequests(data))
        });
}

export const requestAllRequests = () => ({
    type: REQUEST_ALL_REQUESTS
})

export const receiveAllRequests = (data) => ({
    type: RECEIVE_ALL_REQUESTS,
    allRequestsResults: data.map(request => ({...request}))
})

export const getAllRequests = (baseUrl) => dispatch => {
    dispatch(requestAllRequests);
    axios.get(`${baseUrl}/allrequests`)
        .then(res => {
            return res.data;
        }, e => console.log(e))
        .then(data => {
            dispatch(receiveAllRequests(data))
        });
}

export const selectTitle = (title) => ({
    type: SELECT_TITLE,
    title
});

export const selectFirstName = (firstName) => ({
    type: SELECT_FIRST_NAME,
    firstName
});

export const selectLastName = (lastName) => ({
    type: SELECT_LAST_NAME,
    lastName
});

export const selectGeoState = (geoState) => ({
    type: SELECT_GEO_STATE,
    geoState
});

export const selectCity = (city) => ({
    type: SELECT_CITY,
    city
});

