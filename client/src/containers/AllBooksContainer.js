// containers/AllBooksContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllBooksContainer extends Component {
    render() {
        return (
            <div>
                <h1>AllBooksContainer</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(AllBooksContainer);
