import React from 'react';
import { motion } from 'framer-motion';

const UserTestimonials = () => {
    return (
        <motion.div
            className="bg-white p-10 rounded-lg shadow-md max-w-screen-2xl mx-auto my-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                What Our Users Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                    className="p-5 bg-gray-100 shadow-md rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <p className="text-gray-600 italic">
                        "This platform helped me find my lost wallet within two days. I'm so
                        grateful!"
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800 mt-3">- John Doe</h4>
                </motion.div>
                <motion.div
                    className="p-5 bg-gray-100 shadow-md rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <p className="text-gray-600 italic">
                        "I was able to return a phone I found to its rightful owner. Great
                        service!"
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800 mt-3">- Jane Smith</h4>
                </motion.div>
                <motion.div
                    className="p-5 bg-gray-100 shadow-md rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <p className="text-gray-600 italic">
                        "Easy to use and very effective. Highly recommend for lost and found
                        items!"
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800 mt-3">- Emily Brown</h4>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default UserTestimonials;
