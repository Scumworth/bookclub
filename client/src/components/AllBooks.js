// components/AllBooks.js

import React from 'react';
import AllSingleBook from './AllSingleBook';

const AllBooks = ({ allBooksResults, myBooksResults, handleRequest, 
    allRequestsResults, baseUrl, userName }) => (
    <div style = {{ textAlign: 'center' }}>
        { allBooksResults.length !== 0
            ? allBooksResults.map(result => <AllSingleBook 
                key = { result.title + userName } 
                title = { result.title } 
                baseUrl = { baseUrl }
                userName = { userName }
                handleRequest = { handleRequest }
                allRequestsResults = { allRequestsResults }
                myBooksResults = { myBooksResults }
                thumbnail = { result.thumbnail }/>)
                : null
        }
    </div>
);

export default AllBooks;
