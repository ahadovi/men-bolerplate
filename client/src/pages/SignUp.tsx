import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';

const SignUp = () => {
    return (
        <Container className={'my-5'}>
            <Row>
                <Col md={{span: 4, offset:4}}>
                    <Form className={'rounded p-4 bg-dark text-white'}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;