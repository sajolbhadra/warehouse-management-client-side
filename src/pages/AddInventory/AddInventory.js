import React from 'react';
import { Link } from 'react-router-dom';

const AddInventory = () => {
    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;

        const item = {name, img, description, price, quantity, supplierName}

        //send data to server
        fetch('https://thawing-escarpment-51010.herokuapp.com/item', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
            alert('Items Added Successfuly');
            event.target.reset()
        })
    }
    return (
        <div>
            <h1  className='text-center bg-primary text-light py-2 '>Add to Inventory</h1>
            <h1 className='text-center my-5'>Fill Data</h1>
            <form onSubmit={handleAddItem} className="text-center my-5">

                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="name" placeholder='name' required /> <br />
                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="img" placeholder='image url' required /> <br />
                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="description" placeholder='description' required /> <br />
                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="price" placeholder='price' required /> <br />
                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="quantity" placeholder='quantity' required /> <br />
                <input type="text" className='w-50 my-1 px-3 py-1 border rounded-pill text-primary' name="supplierName" placeholder='supplier Name' required /> <br />
                <input type="submit" className='my-2' value="Submit" />
            </form>

            <div className='text-center my-5 ' >
                <Link to='/manage-inventory' className='btn btn-primary' >Manage Inventory</Link>
            </div>
        </div>
    );
};

export default AddInventory;