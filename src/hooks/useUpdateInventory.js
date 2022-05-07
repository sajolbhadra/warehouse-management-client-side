import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useUpdateInventory = () => {
    const {id} = useParams();

    const [updateItem, setUpdateItem] = useState({});

    useEffect( () => {
        const url =`http://localhost:5000/item/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdateItem(data))
    }, [])
    return [updateItem, setUpdateItem];
};

export default useUpdateInventory;