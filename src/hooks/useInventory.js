import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventory, setInventory] = useState();
    useEffect( () => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [setInventory]);
    return [inventory, setInventory];
};
export default useInventory;