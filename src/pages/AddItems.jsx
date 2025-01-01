import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddItems = () => {
    const { user } = useAuth();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleSubmit = (e) => {
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

        const addItem = {
            postType,
            thumbnail,
            title,
            description,
            category,
            location,
            date: selectedDate,
            contactUser,
            contactMail,
        };

        fetch('https://track-it-back-server.vercel.app/all-item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Lost/Found Item has been added!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        form.reset();
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
            <Helmet>
                <title>Add Items</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add Lost or Found Item</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Post Type
                    </label>
                    <select
                        name="postType"
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="" >
                            Select Type
                        </option>
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                    </select>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Upload Thumbnail
                    </label>
                    <input
                        type="text"
                        name="thumbnail"
                        placeholder="Thumbnail link"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Category
                    </label>
                    <select
                        name="category"
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">
                            Select category
                        </option>
                        <option value="Pets">Pets</option>
                        <option value="Documents">Documents</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Date Lost or Found
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
                    <button type="submit" className="btn btn-primary btn-wide btn-lg">
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;
