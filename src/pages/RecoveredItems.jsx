import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';

const RecoveredItems = () => {
    const { user } = useAuth();
    const recoveredItems = useLoaderData();
    const userPosts = recoveredItems.filter((item) => item.postBy === user?.email);

    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <h3 className="text-center text-4xl font-bold text-gray-800 mb-6">My Recovered Items</h3>
            <p className="text-center text-gray-600 mb-10">
                Here you can view all the items that you marked as recovered. Keep track of the details and stay updated.
            </p>
            {userPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {userPosts.map((post) => (
                        <div
                            key={post._id}
                            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200"
                        >
                            <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h4 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h4>
                            <p className="text-gray-600 mb-2">
                                <strong>Description:</strong> {post.description}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Recovered Location:</strong> {post.recoveredLocation}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Recovered Date:</strong>{' '}
                                {new Date(post.recoveredDate).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Recovered By:</strong> {post.recoveredPersonName} (
                                {post.recoveredPersonEmail})
                            </p>
                            <p className="text-gray-600">
                                <strong>Category:</strong> {post.category}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-red-600">
                    You have no recovered items to display.
                </p>
            )}
        </div>
    );
};

export default RecoveredItems;
