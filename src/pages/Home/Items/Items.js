import React, { useEffect, useState } from 'react';
import Item from '../../Item/Item';

const Items = () => {
    const [inventory, setInventory] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [setInventory]);

    const handleUpdate = (_id) => {
        console.log('hello')
    }
    return (
        <div>
            {/* <h1>Items {inventory.length}</h1> */}
            {
                inventory.map(item => <Item
                    key={item._id}
                    item={item}
                    handleUpdate={handleUpdate}
                ></Item>)
            }
        </div>
    );
};

export default Items;