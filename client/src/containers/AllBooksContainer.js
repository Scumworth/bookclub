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
    //store.dispatch(push('/allbooks'));
        return (
            <div>
                <AllBooks />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
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
