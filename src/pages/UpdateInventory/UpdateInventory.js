import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useUpdateInventory from '../../hooks/useUpdateInventory';

const UpdateInventory = () => {
    const {id} = useParams();
    const [updateItem, setUpdateItem] = useUpdateInventory({});
    const {_id, name, img, description, price, quantity, supplierName } = updateItem;

    // localStorage.setItem(`${_id}`, `${quantity}`);

    const handleUpdateItem = (event) => {
        event.preventDefault();
        const quantity = event.target.updateQuantity.value;
        // let storage = parseInt(localStorage.getItem(`${_id}`));
        const item = {quantity}
        //send data to server
        const url =`http://localhost:5000/item/${id}`;
        fetch(url, { 
            method:'PUT',
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
        console.log(item)
    };
    return (
        <div>
            <h2>Details {id}</h2>
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
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted ">Available Quantity: {quantity}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <form onSubmit={handleUpdateItem} className="text-center my-5">

                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="updateQuantity" placeholder='quantity' required /> <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default UpdateInventory;