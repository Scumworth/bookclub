// components/AllBooks.js

import React from 'react';
import AllSingleBook from './AllSingleBook';

const AllBooks = ({ allBooksResults }) => (
    <div>
        { allBooksResults.length !== 0
                ? allBooksResults.map(result => <AllSingleBook/>)
                : null
        }
    </div>
);

export default AllBooks;
