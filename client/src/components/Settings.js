// components/Settings.js

import React from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const Settings = ({ handleSubmit, handleChangeFirstName, handleChangeLastName, userName,
    handleChangeGeoState, handleChangeCity, baseUrl, city, geoState, firstName, lastName
}) => (
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
                    onChange = { handleChangeFirstName }
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
                    onChange = { handleChangeLastName }
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
                    onChange = { handleChangeCity }
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
                    onChange = { handleChangeGeoState }
                />
            </Col>
        </Row>
        <Row>
            <Button type = "submit" onClick = { (e) => handleSubmit(e, baseUrl, firstName, lastName, city, geoState, userName) }>
                Submit
            </Button>
        </Row>
    </Form>
    </div>
);

export default Settings;
