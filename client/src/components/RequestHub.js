// components/RequestHub.js

import React from 'react';
import RequestedByListing from './RequestedByListing';
import RequestedFromListing from './RequestedFromListing';

const RequestHub = ({ myRequestsResults, handleCancel,
    baseUrl, userName, handleConfirm }) => (
    <div>
        <h2>Books Requested By You</h2>
        {
            myRequestsResults.requestedBy.length > 0
            ? myRequestsResults.requestedBy.map(book => <RequestedByListing 
                title = { book.title }
                requestedFrom = { book.requestedFrom }
                handleCancel = { handleCancel }
                baseUrl = { baseUrl }
                userName = { userName }
                key = { book.title + book.requestedFrom }
            />)
                : <p>You have made no requests at this time.</p>
        }
        <h2>Books Requested From You</h2>
        {
            myRequestsResults.requestedFrom.length > 0
            ? myRequestsResults.requestedFrom.map(book => <RequestedFromListing 
                handleConfirm = { handleConfirm }
                title = { book.title }
                thumbnail = { book.thumbnail }
                requestedBy = { book.requestedBy }
                handleCancel = { handleCancel }
                baseUrl = { baseUrl }
                userName = { userName }
                key = { book.title + book.requestedBy }
            />)
                : <p>No one has any requests from you at this time.</p>
        }
    </div>
);

export default RequestHub;
