// components/Header.js

import React from 'react';
import { Jumbotron, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import GoogleLogin from 'react-google-login';

const Header = () => (
    <div>
        <Navbar>
            <Nav>
                <IndexLinkContainer to = "/">
                    <NavItem>Home</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to = "/mybooks">
                    <NavItem>My Books</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to = "/allbooks">
                    <NavItem>All Books</NavItem>
                </IndexLinkContainer>
                <GoogleLogin 
                    clientId = ""
                    buttonText = "Login with Google"
                    onSuccess = { handleLogin } 
                    onFailure = {
                        res => console.log(res)
                    }
                />
            </Nav>
        </Navbar>
        <Jumbotron style = {{ textAlign: 'center' }}>
            <h1>BookClub</h1>
            <p>Book Trading App built for FreeCodeCamp</p>
        </Jumbotron>
    </div>
);

export default Header;
