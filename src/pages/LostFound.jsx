import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const LostFound = () => {
    const items = useLoaderData();
    return (
        <div className='max-w-screen-2xl mx-auto my-10 space-y-3'>
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
