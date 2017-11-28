// components/AllSingleBook.js

import React from 'react';
import { Button } from 'react-bootstrap';

const AllSingleBook = ({ title, thumbnail }) => (
    <div style = {{ width: 200, display: 'inline-block' }}>
        <h4>{ title }</h4>
        <img src = { thumbnail } alt = ""/>
        <Button>Request</Button>
    </div>
);

export default AllSingleBook;
