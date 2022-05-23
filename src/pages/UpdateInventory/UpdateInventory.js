import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useUpdateInventory from '../../hooks/useUpdateInventory';
import { Button, Col, Container, Row } from 'react-bootstrap';


const UpdateInventory = () => {
    const { id } = useParams();
    const [updateItem, setUpdateItem] = useUpdateInventory({});
    const { _id, name, img, description, price, quantity, supplierName } = updateItem;
    console.log(name, img, description, price)

    // localStorage.setItem(`${_id}`, `${quantity}`);

    const handleUpdateItem = (event) => {
        event.preventDefault();
        const quantity = event.target.updateQuantity.value;
        // let storage = parseInt(localStorage.getItem(`${_id}`));
        const item = { quantity }
        //send data to server
        const url = `https://thawing-escarpment-51010.herokuapp.com/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Inventory QUantity Updated Successfuly');
                event.target.reset()
            })
        // console.log(item)
    };
    return (
        <div>
            <h2 className='text-center bg-primary text-light py-2 '>Details of : {id}</h2>
    
            <Container className='my-5'>
                <Row className='my-3 border'>
                    <Col className='text-center d-flex align-items-center'><img src={img} className="img-class" alt="" /></Col>
                    <Col className='text-center d-flex align-items-center'>{name}</Col>
                    <Col className='text-center d-flex align-items-center'>Price: {price}</Col>
                    <Col className='text-center d-flex align-items-center'>Available: {quantity}</Col>
                    <Col className='text-center d-flex align-items-center'>Supplier: {supplierName}</Col>
                    <Col className='text-center d-flex align-items-center'>
                    <Button > Delivered</Button>
                </Col>
                </Row>
            </Container>
            <Container>
                <Row className='d-flex align-items-center my-3 py-5 border px-4'>
                    {description}
                </Row>
            </Container>

            <form onSubmit={handleUpdateItem} className="text-center my-5">
                <input type="text" className='w-50  px-3 py-1 border rounded-pill text-primary' name="updateQuantity" placeholder='quantity' required /> <br />
                <input type="submit" className='my-2 btn btn-primary' value="Submit" />
            </form>





        </div>
    );
};

export default UpdateInventory;