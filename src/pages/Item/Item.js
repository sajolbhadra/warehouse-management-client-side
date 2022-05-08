import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.item;
    const { handleUpdate } = props;
    const { id } = useParams();

    return (
        <div>
            <Container className='my-5 border '>
                <Row className='w-75 mx-auto' >
                    <Col className=''>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <p>Cost/Unit: {price}</p>
                        <p>Available {quantity}</p>
                        <p>Supplier : {supplierName}</p>
                    </Col>
                    <Col className='d-flex flex-column'>
                        <img src={img} className='img-class w-75' alt="" />
                        <Link to={`/item/${_id}`} className='btn btn-primary w-75 my-5' >Update</Link>
                    </Col>
                </Row>
            </Container>

            {/* <Card>
                    <Card.Img className='card-image' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                           Price: {price}
                        </Card.Text>
                        <Card.Text>
                           Supplier Name : {supplierName}
                        </Card.Text>
                        {/* <button onClick={handleUpdate}>Update</button> */}
            {/* <Link to={`/item/${_id}`} >Update</Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted ">Available Quantity: {quantity}</small>
                    </Card.Footer>
                </Card> */}


            {/* <div className='card-row'>
                <div className='card-container'>
                    <div className='card-column'>
                        <h4>Item Name: {_id}</h4>
                        <h3>Item Name: {name}</h3>
                        <p>Item Name: {description}</p>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier Name: {supplierName}</p>
                    </div>
                    <div className='card-column'>
                        <img className='card-image' src={img} alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Item;