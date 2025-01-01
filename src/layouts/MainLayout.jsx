import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Track It Back</title>
            </Helmet>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;