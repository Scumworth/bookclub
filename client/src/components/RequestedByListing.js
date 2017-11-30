// components/RequestedByListing.js

import React from 'react';
import {Row, Col, Button } from 'react-bootstrap';

const RequestedByListing = ({ title, requestedFrom, handleCancel, baseUrl, userName }) => (
    <div>
        <Row>
            <Col xs = { 4 }>
                { title }
            </Col>
            <Col xs = { 4 }>
                <p>From: { requestedFrom }</p>
            </Col>
            <Col xs = { 4 }>
                <Button 
                    onClick = { e => handleCancel(e, baseUrl, title, userName) }
                    bsSyle = "danger"
                >Cancel</Button>
            </Col>
        </Row>
    </div>
);

export default RequestedByListing;
