import React from 'react';
import {Button, Card} from 'react-bootstrap';

const PostCard = () => {
    return (
        <Card className={'mt-4'}>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
    );
};

export default PostCard;