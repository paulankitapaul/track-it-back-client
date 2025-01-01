import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { Helmet } from 'react-helmet-async';

const LostFound = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch('https://track-it-back-server.vercel.app/all-item')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setFilteredItems(data);
            });
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = items.filter(
            (item) =>item.title.toLowerCase().includes(query) || item.location.toLowerCase().includes(query)
        );

        setFilteredItems(filtered);
    };

    return (
        <div className="max-w-screen-2xl mx-auto my-10 space-y-3">
            <Helmet>
                <title>Lost & Found</title>
            </Helmet>
            <h3 className="text-4xl font-bold text-gray-800 text-center">Lost & Found Items</h3>
            <p className="text-lg text-gray-600 text-center">
                Browse through the list of lost and found items. If you've lost something, you might find it here. <br />
                If you've found something, help reunite it with its rightful owner.
            </p>

            <div className="flex items-center gap-1 my-5">
                <p className='text-2xl font-bold'>Search: </p>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search by title or location..."
                    className="input input-bordered w-full max-w-lg"
                />
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <ItemCard key={item._id} item={item}></ItemCard>
                    ))
                ) : (
                    <p className="text-center text-gray-600 col-span-full">
                        No items found for your search query.
                    </p>
                )}
            </div>
        </div>
    );
};

export default LostFound;
