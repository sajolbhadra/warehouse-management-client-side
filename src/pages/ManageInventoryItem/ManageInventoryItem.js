import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventoryItem.css'


const ManageInventoryItem = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.item;
    const { handleDeleteInventory } = props;
    return (
        <Container>
            <Row>
                <Col><img src={img} className="img-class" alt="" /></Col>
                <Col>{name}</Col>
                <Col>{price}</Col>
                <Col>{supplierName}</Col>
                <Col>
                    <Button onClick={() => handleDeleteInventory(_id)}> Delete</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageInventoryItem;