import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory([]);
    console.log(inventory)

    const handleDeleteInventory = (_id) => {
        const action = window.confirm('Want to Delete This Inventory? Ok To proceed');
        if(action){
            // const url

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

        </div>
    );
};

export default ManageInventory;