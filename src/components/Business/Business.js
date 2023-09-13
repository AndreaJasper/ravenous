import React from 'react';
import './Business.css';
import Row from 'react-bootstrap/Row';
import { Card, Col } from 'react-bootstrap';

const Business = ({ business }) => {
    return (
        <Col sm={12} md={3}>
            <Card className='mt-5'>
                <Card.Img variant="top" src={business.imageSrc} />
                <Card.Body>
                    <h4 className='business-name'>{business.name}</h4>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className='business-information'>
                                <p>{business.address}</p>
                                <p>{business.city}</p>
                                <p>{`${business.state} ${business.zip}`}</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className='business-reviews text-md-end'>
                                <h3 className='text-uppercase category'>{business.category}</h3>
                                <p className='rating'>{`${business.rating} stars`}</p>
                                <p>{`${business.reviewCount} reviews`}</p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Business;