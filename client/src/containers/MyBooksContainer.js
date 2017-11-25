// containers/MyBooksContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyBooks from './../components/MyBooks';
import axios from 'axios';
import books from 'google-books-search';
import { selectTitle, getMyBooks } from './../actions';

class MyBooksContainer extends Component {
    componentDidMount() {
       this.props.getMyBooks(this.props.baseUrl, this.props.userName); 
    }
    render() {
        return (
            <div>
                <MyBooks 
                    baseUrl = { this.props.baseUrl } 
                    handleSubmit = { this.props.handleSubmit } 
                    selectedTitle = { this.props.title } 
                    handleChange = { this.props.handleChange } 
                    userName = { this.props.userName } 
                    myBooksResults = { this.props.myBooksResults }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { book, myBooks } = state;
    const { title } = book;
    const { myBooksLoaded, isFetchingMyBooks, myBooksResults } = myBooks;
    return { title, myBooksLoaded, isFetchingMyBooks, myBooksResults };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (e, baseUrl, query, userName) => {
            e.preventDefault();
            books.search(query, {field: 'title'}, (error, results) => {
                if(!error) {
                    console.log(results);
                    if (results.length > 0) {
                        axios.put(`${baseUrl}/mybooks`, {
                            result: results[0],
                            userName
                        })
                        axios.post(`${baseUrl}/allbooks`, {
                            result: results[0]
                        })
                    } 
                }
                else {
                    console.log(error)
                }
            });
        },
        handleChange: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectTitle(value));
        },
        getMyBooks: (baseUrl, userName) => {
            dispatch(getMyBooks(baseUrl, userName));
        },
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooksContainer);
