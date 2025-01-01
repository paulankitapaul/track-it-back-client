import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <motion.div
            className="bg-gray-100 p-10 rounded-lg shadow-md max-w-screen-2xl mx-auto my-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                    className="p-5 bg-white shadow-md rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Post Lost/Found
                    </h3>
                    <p className="text-gray-600">
                        Create a post with all the details about the lost or found item. Add a
                        photo to make it easier to identify.
                    </p>
                </motion.div>
                <motion.div
                    className="p-5 bg-white shadow-md rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Search or Browse</h3>
                    <p className="text-gray-600">
                        Browse or search through the posts to find your lost item or identify
                        a found item.
                    </p>
                </motion.div>
                <motion.div
                    className="p-5 bg-white shadow-md rounded-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect</h3>
                    <p className="text-gray-600">
                        Contact the person who posted the item and arrange for its recovery.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HowItWorks;
