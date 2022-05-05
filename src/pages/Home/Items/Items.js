import React, { useEffect, useState } from 'react';
import useInventory from '../../hooks/useInventory';

const Items = () => {
    const [inventory, setInventory] = useInventory();
    console.log(inventory)
    // const { name, img} = inventory;
    return (
        <div>
            <h1>Items </h1>
            {Map.inventory}
        </div>
    );
};

export default Items;