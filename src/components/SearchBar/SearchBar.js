import React from 'react';
import './Search.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Col, FloatingLabel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rates': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    }

    render() {
        return (
            <Container className='text-center'>
                <div className='sort-by'>
                    <ul className='text-center'>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <hr></hr>
                <Form className='search-bar '>
                    <Row className=" my-3">
                        <Col sm={12} md={6}>
                            <Form.Group controlId="business">
                                <FloatingLabel label="Search Business">
                                    <Form.Control type="text" placeholder="Search Business" />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Group controlId="location">
                                <FloatingLabel label="Where?">
                                    <Form.Control type="text" placeholder="Where?" />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" className="search-btn" size="lg">
                        Let's Go
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default SearchBar;
