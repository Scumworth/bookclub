// containers/SettingsContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './../components/Settings';
import { applySettings } from './../actions';
import axios from 'axios';

class SettingsContainer extends Component {
    render() {
        return (
            <div>
                <Settings handleSubmit = { this.props.handleSubmit } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { settings } = state;    
    const { firstName, lastName, city, geoState } = settings;
    return { firstName, lastName, city, geoState };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => {
            e.preventDefault();
        },
        handleSubmit: (e, firstName, lastName, city, geoState) => {
            e.preventDefault();
            axios.put(`${ this.props.baseUrl }/users`, {
                firstName,
                lastName,
                city,
                geoState
            })
            dispatch(applySettings(firstName, lastName, city, geoState));
            
        },
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
