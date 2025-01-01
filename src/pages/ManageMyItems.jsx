import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageMyItems = () => {
    const { user } = useAuth();
    const items = useLoaderData();
    const [myItems, setMyItems] = useState(items.filter(item => item.contactMail === user.email)); 

    // Delete Item
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/all-item/${id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
                            setMyItems(myItems.filter(item => item._id !== id));
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            );
                        }
                    })
            }
        });
    };

    const handleUpdate = (id) => {
    };

    return (
        <div className="max-w-screen-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage My Items</h2>
            {myItems.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myItems.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                                <td className="border border-gray-300 px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        onClick={() => handleUpdate(item._id)}
                                        className="btn btn-primary btn-sm mr-2"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-error btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-600">You have no items to manage.</p>
            )}
        </div>
    );
};

export default ManageMyItems;
