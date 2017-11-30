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
import { login, getAllRequests, getMyRequests, getMyBooks } from './../actions';
import axios from 'axios';

class App extends Component {
    render() {
        return (
            <div>
                <Header handleLogin = { this.props.handleLogin } status = { this.props.status }/>
                <Switch>
                    <Route exact path = "/" render = { () => <LandingPage /> } />
                    <Route path = "/mybooks" render = { () => <MyBooksContainer 
                            baseUrl = { this.props.baseUrl } 
                            userName = { this.props.userName } 
                            myRequestsLoaded = { this.props.myRequestsLoaded }
                            isFetchingMyRequests = { this.props.isFetchingMyRequests }
                            myRequestsResults = { this.props.myRequestsResults }
                            getAllRequests = { this.props.getAllRequests }
                            getMyRequests = { this.props.getMyRequests }
                            handleCancel = { this.props.handleCancel }
                            handleConfirm = { this.props.handleConfirm }
                            />  } />
                    <Route path = "/allbooks" render = { () => <AllBooksContainer 
                            baseUrl = { this.props.baseUrl } 
                            userName = { this.props.userName } 
                            allRequestsLoaded = { this.props.allRequestsLoaded }
                            isFetchingAllRequests = { this.props.isFetchingAllRequests }
                            allRequestsResults = { this.props.allRequestsResults }
                            handleRequest = { this.props.handleRequest }
                            getAllRequests = { this.props.getAllRequests }
                            getMyRequests = { this.props.getMyRequests }
                            handleCancel = { this.props.handleCancel }
                            /> } />
                    <Route path = "/settings" render = { () => <SettingsContainer baseUrl = { this.props.baseUrl } userName = { this.props.userName }/> } />
                </Switch>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { login, location, allRequests, myRequests } = state;
    const { status, userName} = login;
    const { url } = location;
    const { allRequestsLoaded, isFetchingAllRequests, allRequestsResults } = allRequests;
    const { myRequestsLoaded, isFetchingMyRequests, myRequestsResults } = myRequests;
    return { status, userName, url, allRequestsLoaded, isFetchingAllRequests, allRequestsResults, myRequestsLoaded, isFetchingMyRequests, myRequestsResults };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: response => {
            axios.post(`https://calm-mountain-71385.herokuapp.com/api/users`, {
                userName: response.profileObj.email
            })
            dispatch(login(response.profileObj.email));
        },
        handleRequest: (e, baseUrl, userName, title, thumbnail) => {
            e.preventDefault();
            axios.post(`${baseUrl}/allrequests`, {
                title,
                userName,
                thumbnail
            })
                .then((response) => {
                    dispatch(getAllRequests(baseUrl));
                })
                .then(() => {
                    dispatch(getMyRequests(baseUrl, userName))
                })
                .catch(e => console.log(e));
            
        },
        handleConfirm: (e, baseUrl, removedTitle, userName, requestedBy, thumbnail) => {
            e.preventDefault(); 
            axios.delete(`${baseUrl}/allrequests`, { params: { title: removedTitle }})
                .then((response) => {
                    dispatch(getMyRequests(baseUrl, userName))
                })
                .catch(e => console.log(e));
            axios.patch(`${baseUrl}/mybooks`, {
                title: removedTitle,
                userName
            })
                .catch(e => console.log(e));
            axios.patch(`${baseUrl}/mybooks`, {
                title: removedTitle,
                userName: requestedBy
            })
                .catch(e => console.log(e));
            axios.patch(`${baseUrl}/users`, {
                title: removedTitle,
                userName,
                thumbnail
            })
                .then((response) => {
                    dispatch(getMyBooks(baseUrl, userName))
                })
                .catch(e => console.log(e));

            axios.patch(`${baseUrl}/users`, {
                title: removedTitle,
                userName: requestedBy,
                thumbnail
            })
                .catch(e => console.log(e));
        },
        getAllRequests: (baseUrl) => {
            dispatch(getAllRequests(baseUrl));
        },
        getMyRequests: (baseUrl, userName) => {
            dispatch(getMyRequests(baseUrl, userName));
        },
        handleCancel: (e, baseUrl, removedTitle, userName) => {
            e.preventDefault();
            axios.delete(`${baseUrl}/allrequests`, { params: { title: removedTitle }})
                .then((response) => {
                    dispatch(getMyRequests(baseUrl, userName))
                })
                .catch(e => console.log(e));
            
        },
        dispatch
    }
}

//api url hardcoded above. change when deploying

export default connect(mapStateToProps, mapDispatchToProps)(App);

