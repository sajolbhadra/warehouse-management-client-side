import React, { useEffect, useState } from 'react';
import Item from '../../Item/Item';

const Items = () => {
    const [inventory, setInventory] = useState([]);
    useEffect( () => {
        fetch('https://thawing-escarpment-51010.herokuapp.com/item')
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
                inventory.slice(0,6).map(item => <Item
                    key={item._id}
                    item={item}
                    handleUpdate={handleUpdate}
                ></Item>)
            }
        </div>
    );
};

export default Items;