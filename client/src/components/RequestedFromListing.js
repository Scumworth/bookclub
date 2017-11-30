// components/RequestedFromListing.js

import React from 'react';
import {Row, Col, Button } from 'react-bootstrap';

const RequestedFromListing = ({ title, requestedBy, baseUrl,
    userName, handleConfirm, handleCancel, thumbnail }) => (
    <div>
        <Row>
            <Col xs = { 4 }>
                { title }
            </Col>
            <Col xs = { 4 }>
                <p>By: { requestedBy }</p>
            </Col>
            <Col xs = { 4 }>
                <Button 
                    onClick = { e => handleConfirm(e, baseUrl, title, userName, 
                        requestedBy, thumbnail) } 
                    bsStyle = "info"
                >
                    Approve
                </Button>
                <Button
                    onClick = { e => handleCancel(e, baseUrl, title, userName )}
                    bsStyle = "danger"
                >
                    Deny
                </Button>
            </Col>
        </Row>
    </div>
);

export default RequestedFromListing;
