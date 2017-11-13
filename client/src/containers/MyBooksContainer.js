// containers/MyBooksContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyBooksContainer extends Component {
    render() {
        return (
            <div>
                <h1>MyBooksContainer</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooksContainer);
