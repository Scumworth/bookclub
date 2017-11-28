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
                    handleRemove = { this.props.handleRemove } 
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
                        axios.patch(`${baseUrl}/users`, {
                            title: results[0].title,
                            thumbnail: results[0].thumbnail,
                            userName
                        })
                            .then((response)=> {
                                console.log(response);
                                dispatch(getMyBooks(baseUrl, userName))
                            })
                            .catch(e => console.log(e));
                        axios.post(`${baseUrl}/allbooks`, {
                            title: results[0].title,
                            thumbnail: results[0].thumbnail
                        })
                            .catch(e => console.log(e));
                        axios.patch(`${baseUrl}/mybooks`, {
                            title: results[0].title,
                            userName
                        })
                    } 
                }
                else {
                    console.log(error)
                }
            });
        },
        handleRemove: (e, baseUrl, userName, title, thumbnail) => {
            e.preventDefault();
            axios.patch(`${baseUrl}/users`, {
                title,
                thumbnail,
                userName
            }).then((response) => {
                console.log(response);
                dispatch(getMyBooks(baseUrl, userName))
                })
                .catch(e => console.log(e));
            axios.patch(`${baseUrl}/mybooks`, {
                title,
                userName
            }).then(() => console.log('hello'))
                .catch(e => console.log(e));
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
