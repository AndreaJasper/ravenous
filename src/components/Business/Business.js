import React from 'react';
import Row from 'react-bootstrap/Row';
import { Card, Col } from 'react-bootstrap';
import './Business.css';

const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

class Business extends React.Component {
    render() {
        return (
            <Col sm={12} md={3}>
                <Card>
                    <Card.Img variant="top" src={business.imageSrc} />
                    <Card.Body>
                        <h4 className='business-name'>{business.name}</h4>
                        <Row>
                            <Col sm={12} md={6}>
                                <div className='business-information'>
                                    <p>{business.address}</p>
                                    <p>{business.city}</p>
                                    <p>{business.state} {business.zip}</p>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className='business-reviews'>
                                    <h3 className='text-uppercase category'>{business.category}</h3>
                                    <p className='rating'>{business.rating} stars</p>
                                    <p>{business.reviewCount} reviews</p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default Business;