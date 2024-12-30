import React from 'react';
import useAuth from '../hooks/useAuth';

const AddItems = () => {
    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const postType = form.postType.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const date = form.date.value;
        const contactUser = form.contactUser.value;
        const contactMail = form.contactMail.value;

        const formData = {
            postType, thumbnail, title, description, category, location, date, contactUser, contactMail
        };

        console.log('Form Data:', formData);
        alert('Item added successfully!');
        form.reset();
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
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
                        <option value="" disabled selected>
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
                        placeholder='Thumbnail link'
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
                    <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">
                        Category
                    </label>
                    <select
                        name="category"
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="" disabled selected>
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
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="contactInfo" className="block text-lg font-medium text-gray-700 mb-2">
                        Contact Information
                    </label>
                    <input
                        type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        name="contactUser"
                        placeholder="Enter your contact info"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="email"
                        defaultValue={user?.email}
                        readOnly
                        name="contactMail"
                        placeholder="Enter your contact info"
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
