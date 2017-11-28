// components/MyBooks.js

import React from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import MySingleBook from './MySingleBook';

const MyBooks = ({ handleSubmit, handleRemove, handleChange, baseUrl, selectedTitle, userName, myBooksResults }) => (
    <div style = {{ textAlign: 'center' }}>
        { myBooksResults.length !== 0
                ? myBooksResults.map(result => <MySingleBook 
                    title = { result.title } 
                    thumbnail = { result.thumbnail } 
                    handleRemove = { handleRemove } 
                    baseUrl = { baseUrl }
                    userName = { userName }
                    />)
                : null
        }
        <Form>
            <Row>
                <Col xs = { 10 }> 
                    <FormControl
                        type = "text"
                        placeholder = "Title"
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
);

export default MyBooks;
