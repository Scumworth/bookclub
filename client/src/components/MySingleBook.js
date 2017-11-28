// components/MySingleBook.js

import React from 'react';
import { Button } from 'react-bootstrap';

const MySingleBook = ({ title, thumbnail, handleRemove, baseUrl, userName }) => (
    <div style = {{ width: 200, display: 'inline-block' }}>
        <h4>{ title }</h4>
        <img src = { thumbnail } alt = ""/>
        <Button
            onClick = { e => handleRemove(e, baseUrl, userName, title, thumbnail)}
        >Remove</Button>
    </div>
);

export default MySingleBook;
