import React from 'react';
import Banner from './Banner';
import LatestFindAndLostItems from './LatestFindAndLostItems';
import HowItWorks from './HowItWorks';
import UserTestimonials from './UserTestimonials ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestFindAndLostItems></LatestFindAndLostItems>
            <HowItWorks></HowItWorks>
            <UserTestimonials></UserTestimonials>
        </div>
    );
};

export default Home;