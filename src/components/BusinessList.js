import React from 'react';
import Business from "./Business";
import { Row } from 'react-bootstrap';

class BusinessList extends React.Component {
    render() {
        return (
            <Row className='business-list'>
                <Business />
                <Business />
                <Business />
                <Business />
            </Row>
        );
    }
}

export default BusinessList;
