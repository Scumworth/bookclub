// containers/App.js

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MyBooksContainer from './MyBooksContainer';
import AllBooksContainer from './AllBooksContainer';
import SettingsContainer from './SettingsContainer';
import Header from './../components/Header';
import Footer from './../components/Footer';
import LandingPage from './../components/LandingPage';
import { login } from './../actions';
import axios from 'axios';

class App extends Component {
    render() {
        return (
            <div>
                <Header handleLogin = { this.props.handleLogin } status = { this.props.status }/>
                <Switch>
                    <Route exact path = "/" render = { () => <LandingPage /> } />
                    <Route path = "/mybooks" render = { () => <MyBooksContainer baseUrl = { this.props.baseUrl } userName = { this.props.userName } />  } />
                    <Route path = "/allbooks" render = { () => <AllBooksContainer baseUrl = { this.props.baseUrl } /> } />
                    <Route path = "/settings" render = { () => <SettingsContainer baseUrl = { this.props.baseUrl } /> } />
                </Switch>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { login, location } = state;
    const { status, userName} = login;
    const { url } = location;
    return { status, userName, url };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: response => {
            axios.post(`http://localhost:3001/api/users`, {
                userName: response.profileObj.email
            })
            dispatch(login(response.profileObj.email));
        },
        dispatch
    }
}

//api url hardcoded above. change when deploying

export default connect(mapStateToProps, mapDispatchToProps)(App);

