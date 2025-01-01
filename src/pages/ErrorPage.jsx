import React from 'react';
import errorBg from '../assets/404-status-code.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <Helmet>
                <title>Error!</title>
            </Helmet>
            <Link to='/' className='btn bg-purple-300'>Home</Link>
            <img src={errorBg} alt="" />
        </div>
    );
};

export default ErrorPage;