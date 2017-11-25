// containers/AllBooksContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllBooks from './../components/AllBooks';
import { getAllBooks } from './../actions';


class AllBooksContainer extends Component {
    componentDidMount() {
        this.props.getAllBooks(this.props.baseUrl);
    }
    render() {
        return (
            <div>
                <AllBooks
                    allBooksResults = { this.props.allBooksResults }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { allBooks } = state;
    const { allBooksLoaded, isFetchingAllBooks, allBooksResults } = allBooks;
    return { allBooksLoaded, isFetchingAllBooks, allBooksResults };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllBooks: (baseUrl) => {
            dispatch(getAllBooks(baseUrl));
        },
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllBooksContainer);
