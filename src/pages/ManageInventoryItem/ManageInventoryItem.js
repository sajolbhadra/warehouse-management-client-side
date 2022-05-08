import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventoryItem.css'


const ManageInventoryItem = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.item;
    const { handleDeleteInventory } = props;
    return (


        <Container className='my-3'>
            <Row className='my-1 border py-2'>
                <Col className='text-center d-flex align-items-center justify-content-center'><img src={img} className="img-class" alt="" /></Col>
                <Col className='text-center d-flex align-items-center justify-content-center'>{name}</Col>
                <Col className='text-center d-flex align-items-center justify-content-center'>{price}</Col>
                <Col className='text-center d-flex align-items-center justify-content-center'>Supplier : {supplierName}</Col>
                <Col className='text-center d-flex align-items-center  justify-content-center'>
                    <Button onClick={() => handleDeleteInventory(_id)}> Delete</Button>
                </Col>
            </Row>
        </Container>



    );
};

export default ManageInventoryItem;