// components/MyBooks.js

import React from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import MySingleBook from './MySingleBook';

const MyBooks = ({ handleSubmit, handleChange, baseUrl, selectedTitle, userName, myBooksResults }) => (
    <div>
        { myBooksResults.length !== 0
                ? myBooksResults.map(result => <MySingleBook/>)
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
