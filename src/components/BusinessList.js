import Business from "./Business";
import { Row } from 'react-bootstrap';

const BusinessList = () => {
    const businesses = [
        {
            id: 1,
            imageSrc: 'https://placehold.co/600x600',
            name: 'Karma',
            address: '123 Chestnut Street',
            city: 'Consio',
            state: 'FC',
            zipcode: '46267',
            category: 'Bar and Grill',
            rating: 4.2,
            reviewCount: 85,
        },
        {
            id: 2,
            imageSrc: 'https://placehold.co/600x600',
            name: 'The Lighthouse',
            address: '456 Delwe Pathway',
            city: 'Orodia City',
            state: 'FC',
            zipcode: '24680',
            category: 'Seafood',
            rating: 4.0,
            reviewCount: 200,
        },
        {
            id: 3,
            imageSrc: 'https://placehold.co/600x600',
            name: 'Oddity',
            address: '3671 Green Avenue',
            city: 'Santa Telos',
            state: 'FC',
            zipcode: '18567',
            category: 'Breakfast',
            rating: 4.8,
            reviewCount: 379,
        },
        {
            id: 4,
            imageSrc: 'https://placehold.co/600x600',
            name: 'The Garden',
            address: '7990 Stelgate Road',
            city: 'Santa Telos',
            state: 'FC',
            zipcode: '04678',
            category: 'Italian Cuisine',
            rating: 5.0,
            reviewCount: 608,
        },
    ];

    return (
        // <Row className='business-list'>
        //     {businesses.map(business)}
        // </Row>
        <div><h1>Testing</h1></div>
    );
}

export default BusinessList;
