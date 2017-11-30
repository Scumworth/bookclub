// components/AllSingleBook.js

import React from 'react';
import { Button } from 'react-bootstrap';
import { requestCheck, inventoryCheck } from './../utils';

const AllSingleBook = ({ title, thumbnail, baseUrl, userName, 
    handleRequest, allRequestsResults, myBooksResults }) => (
        <div style = {{ width: 200, display: 'inline-block', 
            backgroundColor: 'lightGray', verticalAlign: 'top',
            margin: 20, padding: 20, borderRadius: 10
        }}>
        <h4>{ title }</h4>
        <img src = { thumbnail } alt = ""/>
        { (userName && !requestCheck(title, allRequestsResults) && !inventoryCheck(title, myBooksResults))
                ? <Button 
                       onClick = { e => handleRequest(e, baseUrl, userName, title, thumbnail) }
                       bsStyle = "info"
                  >Request</Button>
            : null
        }
    </div>
);

export default AllSingleBook;
