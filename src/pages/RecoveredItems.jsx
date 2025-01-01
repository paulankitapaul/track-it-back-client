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
                Below is a list of items you have marked as recovered, including details of recovery.
            </p>
            {userPosts.length > 0 ? (
                <div className="">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Recovered Location</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Recovered Date</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Recovered By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userPosts.map((post) => (
                                <tr key={post._id} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">{post.recoveredTitle}</td>
                                    <td className="border border-gray-300 px-4 py-2">{post.recoveredLocation}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(post.recoveredDate).toLocaleDateString()}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {post.recoveredPersonName} ({post.recoveredPersonEmail})
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-red-600">You have no recovered items to display.</p>
            )}
        </div>
    );
};

export default RecoveredItems;
