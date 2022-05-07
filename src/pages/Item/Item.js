import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.item;
    const {handleUpdate} = props;
    const {id} = useParams();
    
    return (
        <div>

            <CardGroup>
                <Card>
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
                        <Link to={`/item/${_id}`} >Update</Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted ">Available Quantity: {quantity}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>


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