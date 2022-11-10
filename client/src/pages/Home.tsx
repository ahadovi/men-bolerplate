import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import PostCard from '../components/PostCard';

const Home = () => {
    return (
        <Container>
           <Row>
               <Col md={3}>
                   <PostCard/>
               </Col>
               <Col md={3}>
                   <PostCard/>
               </Col>
               <Col md={3}>
                   <PostCard/>
               </Col>
               <Col md={3}>
                   <PostCard/>
               </Col>
           </Row>
        </Container>
    );
};

export default Home;