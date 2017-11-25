// components/Header.js

import React from 'react';
import { Jumbotron, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import GoogleLogin from 'react-google-login';

const Header = ({ handleLogin, status }) => (
    <div>
        <Navbar>
            <Nav bsStyle = "pills">
                <IndexLinkContainer to = "/">
                    <NavItem>Home</NavItem>
                </IndexLinkContainer>
                { (status) 
                    ? <IndexLinkContainer to = "/mybooks">
                        <NavItem>My Books</NavItem>
                    </IndexLinkContainer>
                    : null
                }
                <IndexLinkContainer to = "/allbooks">
                    <NavItem>All Books</NavItem>
                </IndexLinkContainer>
                { (!status) 
                    ? <GoogleLogin 
                        clientId = "735383211483-b5gkdfdp5dtm28tlra32kegsfl3fl4m2.apps.googleusercontent.com"
                        buttonText = "Login with Google"
                        onSuccess = { handleLogin } 
                        onFailure = {
                            res => console.log(res)
                        }
                    />
                    : <IndexLinkContainer to = "/settings">
                          <NavItem>Settings</NavItem>
                      </IndexLinkContainer> 
                }
            </Nav>
        </Navbar>
        <Jumbotron style = {{ textAlign: 'center' }}>
            <h1>BookClub</h1>
            <p>Book Trading App built for FreeCodeCamp</p>
        </Jumbotron>
    </div>
);

export default Header;
