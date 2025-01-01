import React from 'react';
import Banner from './Banner';
import LatestFindAndLostItems from './LatestFindAndLostItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestFindAndLostItems></LatestFindAndLostItems>
        </div>
    );
};

export default Home;