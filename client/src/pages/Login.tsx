import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';

const Login = () => {
    return (
        <Container className={'my-5'}>
            <Row>
                <Col md={{span: 4, offset:4}}>
                    <Form className={'rounded p-4 bg-dark text-white'}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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

export default Login;