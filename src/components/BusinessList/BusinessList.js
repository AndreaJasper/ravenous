import React from 'react';
import './BusinessList.css'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
    return (
        <Container className='business-list'>
            <Row>
                {businesses.map((business) => {
                    return <Business business={business} key={business.name} />;
                })}
            </Row>
        </Container>
    );
}

export default BusinessList;
