// actions/index.js
import axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';
export const APPLY_SETTINGS = 'APPLY_SETTINGS';
export const REQUEST_ALL_BOOKS = 'REQUEST_ALL_BOOKS';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const REQUEST_MY_BOOKS = 'REQUEST_MY_BOOKS';
export const RECEIVE_MY_BOOKS = 'RECEIVE_MY_BOOKS];'
export const SELECT_TITLE = 'SELECT_TITLE';

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
        userName
    })
        .then(res => {
            return res.data
        }, e => console.log(e))
        .then(data => {
            dispatch(receiveMyBooks(data));
        });
}

export const selectTitle = (title) => ({
    type: SELECT_TITLE,
    title
});
