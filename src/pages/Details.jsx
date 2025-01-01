import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Details = () => {
    const { user } = useAuth();
    const item = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const recoveredLocation = form.recoveredLocation.value;
        const recoveredDate = selectedDate;
        const recoveredPersonName = form.recoveredPersonName.value;
        const recoveredPersonEmail = form.recoveredPersonEmail.value;
        const recoveredItem = item._id 

        const recoveryData = {
            recoveredItem,
            recoveredLocation,
            recoveredDate,
            recoveredPersonName,
            recoveredPersonEmail
        };

         fetch('http://localhost:5000/recovered-item', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(recoveryData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Item recovered has been added!!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
        setShowModal(false);
    };


    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <figure>
                <img
                    className='w-full rounded-md'
                    src={item.thumbnail}
                    alt={`image of ${item.title}`} />
            </figure>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
            <div className="space-y-4">
                <p className="text-gray-700"><strong>Description:</strong> {item.description}</p>
                <p className="text-gray-700"><strong>Post Type:</strong> {item.postType}</p>
                <p className="text-gray-700"><strong>Category:</strong> {item.category}</p>
                <p className="text-gray-700"><strong>Location:</strong> {item.location}</p>
                <p className="text-gray-700"><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
            </div>
            <div className="mt-6">
                {item.postType === "Lost" ? (
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModal(true)}
                    >
                        Found This!
                    </button>
                ) : (
                    <button
                        className="btn btn-secondary"
                        onClick={() => setShowModal(true)}
                    >
                        This is Mine!
                    </button>
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <h3 className="text-2xl font-bold mb-4">Recovered Item Details</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Recovered Location
                                </label>
                                <input
                                    type="text"
                                    name="recoveredLocation"
                                    placeholder="Enter recovery location"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Recovered Date
                                </label>
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
                                    Recovered Person Information
                                </label>
                                <input
                                    type="text"
                                    name="recoveredPersonName"
                                    defaultValue={user?.displayName}
                                    readOnly
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    name="recoveredPersonEmail"
                                    defaultValue={user?.email}
                                    readOnly
                                    className="input input-bordered w-full mt-2"
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-success btn-wide">
                                    Submit
                                </button>
                                <button
                                    type="button"
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

export default Details;
