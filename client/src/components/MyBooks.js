// components/MyBooks.js

import React from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import MySingleBook from './MySingleBook';
import RequestHub from './RequestHub';

const MyBooks = ({ handleSubmit, handleRemove, handleChange, handleCancel, 
    baseUrl, selectedTitle, userName, myBooksResults, myRequestsResults, handleConfirm }) => (
    <div style = {{ textAlign: 'center' }}>
        { myRequestsResults.requestedFrom.length > 0 || myRequestsResults.requestedBy.length > 0
            ? <RequestHub 
                    myRequestsResults = { myRequestsResults }
                    handleCancel = { handleCancel }
                    handleConfirm = { handleConfirm }
                    baseUrl = { baseUrl }
                    userName = { userName }
                />
            : null
        }
        { myBooksResults.length !== 0
                ? myBooksResults.map(result => <MySingleBook 
                    key = { result.title + userName }
                    title = { result.title } 
                    thumbnail = { result.thumbnail } 
                    handleRemove = { handleRemove } 
                    baseUrl = { baseUrl }
                    userName = { userName }
                    />)
                : null
        }
        <div style = {{ width: 500, margin: '0 auto', marginTop: 25 }}>
            <Form>
                <Row>
                    <Col xs = { 10 }> 
                        <FormControl
                            type = "text"
                            placeholder = "e.g. Great Expectations by Charles Dickens"
                            onChange = { handleChange } 
                        />
                    </Col>
                    <Col xs = { 2 }>
                        <Button type = "submit" onClick = {(e) => handleSubmit(e, baseUrl, selectedTitle, userName) }>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>
);

export default MyBooks;
