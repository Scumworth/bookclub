// containers/SettingsContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './../components/Settings';
import { selectFirstName, selectLastName, selectGeoState, selectCity, changeSettings } from './../actions';
import axios from 'axios';

class SettingsContainer extends Component {
    render() {
        return (
            <div>
                <Settings 
                    baseUrl = { this.props.baseUrl }
                    handleSubmit = { this.props.handleSubmit } 
                    handleChangeFirstName = { this.props.handleChangeFirstName }
                    handleChangeLastName = { this.props.handleChangeLastName }
                    handleChangeGeoState = { this.props.handleChangeGeoState }
                    handleChangeCity = { this.props.handleChangeCity }
                    city  = { this.props.city }
                    geoState = { this.props.geoState }
                    firstName = { this.props.firstName }
                    lastName = { this.props.lastName }
                    userName = { this.props.userName }
                />
                {
                    this.props.settingsChanged
                        ? <p>Settings have been updated.</p> 
                        : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { settings } = state;    
    const { firstName, lastName, city, geoState, settingsChanged } = settings;
    return { firstName, lastName, city, geoState, settingsChanged };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeFirstName: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectFirstName(value));
        },
        handleChangeLastName: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectLastName(value));
        },
        handleChangeGeoState: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectGeoState(value));
        },
        handleChangeCity: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectCity(value));

        },
        handleSubmit: (e, baseUrl, firstName, lastName, city, geoState, userName) => {
            e.preventDefault();
            axios.patch(`${ baseUrl }/settings`, {
                userName,
                firstName,
                lastName,
                city,
                geoState
            })
                .then(() => {
                    dispatch(changeSettings);
                })
                .catch(e => console.log(error));
            
        },
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
