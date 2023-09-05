import React from 'react';
import { Card, Col } from 'react-bootstrap';

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
                        <div className='row'>
                            <div className='col-sm-12 col-md-6'>
                                <div className='business-information'>
                                    <p>{business.address}</p>
                                    <p>{business.city}</p>
                                    <p>{business.state} {business.zip}</p>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 text-md-end'>
                                <div className='business-reviews'>
                                    <h3 className='text-uppercase category'>{business.category}</h3>
                                    <p className='rating'>{business.rating} stars</p>
                                    <p>{business.reviewCount} reviews</p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default Business;