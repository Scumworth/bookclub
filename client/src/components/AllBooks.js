// components/AllBooks.js

import React from 'react';
import AllSingleBook from './AllSingleBook';

const AllBooks = ({ allBooksResults, handleRequest }) => (
    <div style = {{ textAlign: 'center' }}>
        { allBooksResults.length !== 0
            ? allBooksResults.map(result => <AllSingleBook 
                title = { result.title } 
                handleRequest = { handleRequest }
                thumbnail = { result.thumbnail }/>)
                : null
        }
    </div>
);

export default AllBooks;
