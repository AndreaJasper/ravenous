import { isCompositeComponentWithType } from "react-dom/test-utils";
import { Card } from 'react-bootstrap';

const Business = () => {

    return (
        <div id="business" className="container">
            <h1>Business</h1>
            {/* <Card className="card">
                <Card.Img src={business.imageSrc} alt={business.name} />
                <Card.Body>
                    <Card.Title>
                        {business.name}
                    </Card.Title>
                    <Card.Text>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <p>{business.address}</p>
                                <p>{business.city}</p>
                                <p>{business.state}{business.zipcode}</p>
                            </div>
                            <div className="col-sm-12 col-md-6 sm-text-end">
                                <p className="category">{business.category}</p>
                                <p>{business.rating}</p>
                                <p>{business.review_count}</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>     */}
        </div>
    );
}

export default Business;
