// containers/AllBooksContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllBooks from './../components/AllBooks';
import { getAllBooks, getMyBooks } from './../actions';
const Loader = require('react-loader');

class AllBooksContainer extends Component {
    componentDidMount() {
        this.props.getAllBooks(this.props.baseUrl);
        this.props.getAllRequests(this.props.baseUrl);
        this.props.getMyBooks(this.props.baseUrl, this.props.userName);
    }
    render() {
        return (
            <div>
                <Loader loaded = { (this.props.allBooksLoaded && this.props.allRequestsLoaded) }>
                    <AllBooks
                        allBooksResults = { this.props.allBooksResults }
                        myBooksResults = { this.props.myBooksResults } 
                        handleRequest = { this.props.handleRequest }
                        baseUrl = { this.props.baseUrl }
                        userName = { this.props.userName }
                        allRequestsResults = { this.props.allRequestsResults }
                    />
                </Loader>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { allBooks, allRequests, myBooks } = state;
    const { allBooksLoaded, isFetchingAllBooks, allBooksResults } = allBooks;
    const { myBooksResults } = myBooks;
    const { allRequestsLoaded, isFetchingAllRequests, allRequestsResults } = allRequests;
    return { allBooksLoaded, isFetchingAllBooks, allBooksResults, 
        allRequestsLoaded, isFetchingAllRequests, allRequestsResults, 
        myBooksResults };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllBooks: (baseUrl) => {
            dispatch(getAllBooks(baseUrl));
        },
        getMyBooks: (baseUrl, userName) => {
            dispatch(getMyBooks(baseUrl, userName));
        },
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllBooksContainer);
