import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    useEffect( () => {
        fetch('https://thawing-escarpment-51010.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [setInventory]);
    return [inventory, setInventory];
};
export default useInventory;