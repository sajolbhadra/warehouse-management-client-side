import React from 'react';
import Header from '../Header/Header';
import Items from '../Items/Items';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Items></Items>
        </div>
    );
};

export default Home;