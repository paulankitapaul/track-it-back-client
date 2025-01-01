import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from 'react-helmet-async';

const ManageMyItems = () => {
    const { user } = useAuth();
    const items = useLoaderData();
    const [myItems, setMyItems] = useState(items.filter(item => item.contactMail === user.email));
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/all-item/${id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
                            setMyItems(myItems.filter(item => item._id !== id));
                            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: error.response?.data?.message || error.message,
                        });
                    });
            }
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const postType = form.postType.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const contactUser = form.contactUser.value;
        const contactMail = form.contactMail.value;
        const date = selectedDate;

        const updatedItems = { postType, thumbnail, title, description, category, location, date, contactUser, contactMail };

        fetch(`http://localhost:5000/all-item/${itemToEdit._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItems),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                    setMyItems(myItems.map(item =>
                        item._id === itemToEdit._id ? { ...item, ...updatedItems } : item
                    ));
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                });
            });

        setShowModal(false);
    };

    const handleOpenModal = (item) => {
        setItemToEdit(item);
        setSelectedDate(new Date(item.date));
        setShowModal(true);
    };

    return (
        <div className="max-w-screen-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <Helmet>
                <title>Manage Items</title>
            </Helmet>
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
                                        onClick={() => handleOpenModal(item)}
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

            {showModal && itemToEdit && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
                        <h3 className="text-2xl font-bold mb-4">Update Item</h3>
                        <form onSubmit={handleUpdate} className="space-y-6 grid grid-cols-4 md:grid-cols-3 gap-2">
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Post Type</label>
                                <select
                                    name="postType"
                                    defaultValue={itemToEdit?.postType}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="">Select Type</option>
                                    <option value="Lost">Lost</option>
                                    <option value="Found">Found</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Upload Thumbnail</label>
                                <input
                                    type="text"
                                    name="thumbnail"
                                    defaultValue={itemToEdit?.thumbnail}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={itemToEdit?.title}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={itemToEdit?.description}
                                    className="textarea textarea-bordered w-full"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    name="category"
                                    defaultValue={itemToEdit?.category}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="Pets">Pets</option>
                                    <option value="Documents">Documents</option>
                                    <option value="Gadgets">Gadgets</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={itemToEdit?.location}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Date Lost or Found</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    className="input input-bordered w-full"
                                    dateFormat="dd/MM/yyyy"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Contact Information
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user?.displayName}
                                    readOnly
                                    name="contactUser"
                                    className="input input-bordered w-full mb-2"
                                    required
                                />
                                <input
                                    type="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    name="contactMail"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button className="btn btn-success btn-wide">Save Changes</button>
                                <button
                                    className="btn btn-error btn-wide ml-4"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}



        </div>
    );
};

export default ManageMyItems;
