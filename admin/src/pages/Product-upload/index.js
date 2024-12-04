import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const ProductUpload = () => {
    const [value, setValue] = React.useState(2);
    const [selectedImages, setSelectedImages] = useState([]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && selectedImages.length < 4) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImages(prev => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = (index) => {
        setSelectedImages(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="right-content w-100">
                <motion.div 
                    className="p-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="header bg-white dark:bg-gray-800 border rounded-xl p-3 shadow-sm">
                        <h4 className="text-[#000000] dark:text-[#ffffff] font-bold text-xl">Product Upload</h4>
                    </div>
                </motion.div>

                <form className="px-4 md:px-0">
                    <div className="row">
                        <div className="col-sm-12">
                            <motion.div 
                                className="card p-4 dark:bg-[#1E293B] dark:text-white"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="basic-info">
                                    <motion.h5 
                                        className="mb-4 text-gray-900 dark:text-white font-bold text-xl md:text-2xl"
                                        variants={itemVariants}
                                    >
                                        Basic Information
                                    </motion.h5>

                                    <motion.div className="form-group mb-4" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">TITLE</label>
                                        <input
                                            type="text"
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                            placeholder="Enter product title"
                                        />
                                    </motion.div>

                                    <motion.div className="form-group mb-4" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">DESCRIPTION</label>
                                        <textarea
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                            rows="4"
                                            placeholder="Enter product description"
                                        ></textarea>
                                    </motion.div>

                                    <motion.div className="row mb-4" variants={itemVariants}>
                                        <div className="col-12 col-md-6 mb-4 md:mb-0">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">CATEGORY</label>
                                            <select className="form-select bg-[#f0f0f0] dark:bg-gray-700 dark:text-white text-gray-900 border-0 rounded mb-4 w-full">
                                                <option>Mens</option>
                                                <option>Women</option>
                                                <option>Kids</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">BRAND</label>
                                            <select className="form-select bg-[#f0f0f0] dark:bg-gray-700 dark:text-white text-gray-900 border-0 rounded mb-4 w-full">
                                                <option>Peter India</option>
                                                <option>livon</option>
                                                <option>Twenty</option>
                                            </select>
                                        </div>
                                    </motion.div>

                                    <motion.div className="row" variants={itemVariants}>
                                        <div className="col-12 col-md-6 mb-4 md:mb-0">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">REGULAR PRICE</label>
                                            <input
                                                type="number"
                                                className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                                placeholder="0.00"
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">DISCOUNT PRICE</label>
                                            <input
                                                type="number"
                                                className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div className="row" variants={itemVariants}>
                                        <div className="col-12 col-md-6 mb-4 md:mb-0">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">Product stock</label>
                                            <input
                                                type="number"
                                                className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                                placeholder="0.00"
                                            />
                                        </div>
                                        <div className="col-12 col-md-6 mb-4">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">Rating</label>
                                            <div className="bg-[#f0f0f0] dark:bg-gray-700 p-3 rounded">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div className="col-sm-12" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">TAGS</label>
                                        <textarea
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                            rows="4"
                                            placeholder="Enter tags"
                                        ></textarea>
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants} className="mt-6">
                                    <h5 className="text-[#000000] dark:text-[#ffffff] font-bold text-xl md:text-2xl mb-4">Media And Published</h5>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        {/* Image Preview Section */}
                                        <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 min-h-[200px]">
                                            {selectedImages.length > 0 ? (
                                                <div className="grid grid-cols-2 gap-2">
                                                    {selectedImages.map((image, index) => (
                                                        <div key={index} className="relative">
                                                            <img 
                                                                src={image} 
                                                                alt={`Preview ${index + 1}`}
                                                                className="w-full h-32 object-cover rounded-lg"
                                                            />
                                                            <button 
                                                                onClick={() => removeImage(index)}
                                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                                                            >
                                                                <FaTimes />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center h-full">
                                                    <div className="text-center text-gray-500">
                                                        <FaCloudUploadAlt className="mx-auto text-4xl md:text-5xl mb-2" />
                                                        <p>No images selected</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Upload Section */}
                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 min-h-[200px]">
                                            <label className="flex flex-col items-center justify-center h-full cursor-pointer">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                                <div className="text-center text-gray-500">
                                                    <FaCloudUploadAlt className="mx-auto text-4xl md:text-5xl mb-2" />
                                                    <p>Click to upload image</p>
                                                    <p className="text-sm">(Max 4 images)</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Publish Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-base md:text-lg"
                                    >
                                        <FaCloudUploadAlt className="text-xl" />
                                        PUBLISH AND VIEW
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProductUpload;