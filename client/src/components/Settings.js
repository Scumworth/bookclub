// components/Settings.js

import React from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const Settings = ({ handleSubmit }) => (
    <div style = {{ textAlign: 'center', margin: 50 }}>
    <Form>
        <h1>Update Settings</h1>
        <Row>
            <Col xs = { 2 }>
                <h4>First Name</h4>
            </Col>
            <Col xs = { 10 }>
                <FormControl
                    type = "text"
                    placeholder = "Jane"
                />
            </Col>
        </Row>
        <Row>
            <Col xs = { 2 }>
                <h4>Last Name</h4>
            </Col>
            <Col xs = { 10 }>
                <FormControl
                    type = "text"
                    placeholder = "Doe"
                />
            </Col>
        </Row>
        <Row>
            <Col xs = { 2 }>
                <h4>City</h4>
            </Col>
            <Col xs = { 10 }>
                <FormControl
                    type = "text"
                    placeholder = "Exampleville"
                />
            </Col>
        </Row>
        <Row>
            <Col xs = { 2 }>
                <h4>State</h4>
            </Col>
            <Col xs = { 10 }>
                <FormControl
                    type = "text"
                    placeholder = "Examplevannia"
                />
            </Col>
        </Row>
        <Row>
            <Button type = "submit" onClick = { handleSubmit }>
                Submit
            </Button>
        </Row>
    </Form>
    </div>
);

export default Settings;
