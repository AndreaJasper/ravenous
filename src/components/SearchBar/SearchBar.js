import React, { useState } from 'react';
import styles from './Search.css';
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



const SearchBar = ({ searchYelp }) => {
    const [term, setTerm] = useState("null");
    const [location, setLocation] = useState("null");
    const [sortBy, setSortBy] = useState("best_match");

    const getSortByClass = (sortByOption) => {
        if (sortBy === sortByOption) {
            return styles.active;
        }
        return "";
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        searchYelp(term, location, sortBy);
    };

    const renderSortByOptions = () => {
      return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li 
            className={getSortByClass(sortByOptionValue)}
            onClick={() => {
                handleSortByChange(sortByOptionValue);
            }}
            key={sortByOptionValue}
            >
                {sortByOption}
            </li>;
      });
    };

    return (
        <div className="search-area">
            <Container className="text-center">
                <div className="sort-by">
                    <ul className="text-center">
                        {renderSortByOptions()}
                    </ul>
                </div>
                <hr></hr>
                <Form className="search-bar ">
                    <Row className="my-3">
                        <Col sm={12} md={6}>
                            <Form.Group controlId="business" className='business-search'>
                                <Form.Control type="text" placeholder="Search Businesses" />
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Group controlId="location">
                                <Form.Control type="text" placeholder="Where?" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" className="search-btn" size="lg">
                        Let's Go
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default SearchBar;
