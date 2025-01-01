import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';

const LatestFindAndLostItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://track-it-back-server.vercel.app/all-item')
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, []);

    const latestItems = items.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <h3 className="text-center text-4xl font-bold text-gray-800 mb-6">
                Latest Find & Lost Items
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestItems.map((item) => (
                    <ItemCard key={item._id} item={item}></ItemCard>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link to='/lost-and-found' className="btn btn-secondary btn-wide"
                >
                    See All
                </Link>
            </div>
        </div>
    );
};

export default LatestFindAndLostItems;
