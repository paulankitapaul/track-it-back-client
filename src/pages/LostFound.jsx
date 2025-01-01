import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import { Helmet } from 'react-helmet-async';

const LostFound = () => {
    // const items = useLoaderData();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='max-w-screen-2xl mx-auto my-10 space-y-3'>
            <Helmet>
                <title>Lost & Found</title>
            </Helmet>
            <h3 className="text-4xl font-bold text-gray-800 text-center">Lost & Found Items</h3>
            <p className="text-lg text-gray-600 text-center">
                Browse through the list of lost and found items. If you've lost something, you might find it here. <br />
                If you've found something, help reunite it with its rightful owner.
            </p>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5'>
                {
                    items.map(item =>
                        <ItemCard
                            key={item._id}
                            item={item}
                        ></ItemCard>)
                }
            </div>
        </div>
    );
};

export default LostFound;
