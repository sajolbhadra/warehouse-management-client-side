import React from 'react';
import Extrasection from '../../ExtraSection/Extrasection';
import Header from '../Header/Header';
import Items from '../Items/Items';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Items></Items>
            <Extrasection></Extrasection>
        </div>
    );
};

export default Home;