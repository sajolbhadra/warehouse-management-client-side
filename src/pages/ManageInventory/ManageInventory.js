import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory([]);
    console.log(inventory)

    const handleDeleteInventory = (id) => {
        const action = window.confirm('Want to Delete This Inventory? Ok To proceed');
        if(action){
            const url = `https://thawing-escarpment-51010.herokuapp.com/item/${id}`;
            fetch(url , {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = inventory.filter(item => item._id !==id)
                setInventory(remaining)
            })

        }
    }
    return (
        <div>
            <h1 className='text-center bg-primary text-light py-2 '>Manage Items</h1>

            {
                inventory.map(item => <ManageInventoryItem
                    key={item._id}
                    item={item}
                    handleDeleteInventory={handleDeleteInventory}
                ></ManageInventoryItem>)
            }


            <div className='text-center my-5 ' >
                <Link to='/add-inventory' className='btn btn-primary' >Add New Inventory</Link>
            </div>
        </div>
    );
};

export default ManageInventory;