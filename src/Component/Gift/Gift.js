import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Gift = (props) => {
    const { title, imgUrl } = props.gift;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Gift;