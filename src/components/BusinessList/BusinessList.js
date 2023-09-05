import React from 'react';
import './BusinessList.css'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Business from "../Business/Business";

class BusinessList extends React.Component {
    render() {
        return (
            <Container className='business-list'>
                <Row>
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                </Row>
            </Container>
        );
    }
}

export default BusinessList;
