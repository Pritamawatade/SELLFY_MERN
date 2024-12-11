import { CiImageOn } from "react-icons/ci";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import { fetchdatafromapi, postData } from '../../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';

const ProductUpload = () => {
    const [value, setValue] = React.useState(0);
    const [selectedImages, setSelectedImages] = useState([]);
    const [featureValue, setFeatureValue] = useState(false);
    const [categoryValue, setCategoryValue] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [categories, setCategories] = useState([]);
    const loadingBar = useRef(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await fetchdatafromapi('/api/category');
                if (data) {
                    setCategories(data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

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

    const handleFeaturedChange = (e) => {
        setFeatureValue(e.target.value === 'true');
    }

    const handleCategoryChange = (e) => {
        setCategoryValue(e.target.value);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const newImages = files.map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }));
            setSelectedImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    const handleRemoveImage = (index) => {
        setSelectedImages(prevImages => {
            const newImages = [...prevImages];
            URL.revokeObjectURL(newImages[index].preview);
            newImages.splice(index, 1);
            return newImages;
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        loadingBar.current.continuousStart();

        try {
            const formDataToSend = new FormData();
            
            // Add basic form fields
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('brand', formData.brand);
            
            // Add numeric fields with proper conversion
            formDataToSend.append('price', Number(formData.price) || 0);
            formDataToSend.append('oldPrice', Number(formData.oldPrice) || 0);
            formDataToSend.append('countInStock', Number(formData.countInStock) || 0);
            formDataToSend.append('numReviews', Number(formData.numReviews) || 0);
            
            // Add rating from star component (0-5)
            formDataToSend.append('rating', value || 0);
            
            // Add isFeatured as boolean
            formDataToSend.append('isFeatured', featureValue);
            formDataToSend.append('category', categoryValue);

            // Append images
            selectedImages.forEach((image, index) => {
                formDataToSend.append('images', image.file);
            });
            
            const response = await fetch('http://localhost:4000/api/products/create', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Product created successfully!');
                setFormData({
                    name: '',
                    description: '',
                    brand: '',
                    price: '',
                    oldPrice: '',
                    countInStock: '',
                    numReviews: '0'
                });
                setSelectedImages([]);
                setValue(0);
                setCategoryValue('');
            } else {
                toast.error(data.message || 'Failed to create product');
            }
        } catch (error) {
            console.error('Error creating product:', error);
            toast.error('Failed to create product');
        } finally {
            loadingBar.current.complete();
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        brand: '',
        price: '',
        oldPrice: '',
        countInStock: '',
        numReviews: '0'
    });

    return (
        <>
            <LoadingBar color='#f11946' ref={loadingBar} shadow={true} />
            <div className="right-content w-100">
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <motion.div
                    className="p-6 md:p-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="header bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg">
                        <h3 className="text-[#ffffff] font-bold text-2xl md:text-3xl flex items-center gap-3">
                            <FaCloudUploadAlt className="text-3xl" />
                            Product Upload
                        </h3>
                    </div>
                </motion.div>

                <form className="px-4 md:px-8 pb-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-grow lg:w-3/4">
                            <motion.div
                                className="card bg-white dark:bg-[#1E293B] dark:text-white rounded-2xl shadow-xl p-6 md:p-8"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="basic-info space-y-6">
                                    <motion.h5
                                        className="mb-6 text-gray-900 dark:text-white font-bold text-2xl md:text-3xl border-b dark:border-gray-700 pb-4"
                                        variants={itemVariants}
                                    >
                                        Basic Information
                                    </motion.h5>

                                    <motion.div className="form-group" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">TITLE</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Enter product title"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div className="form-group" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">DESCRIPTION</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            rows="4"
                                            placeholder="Enter product description"
                                            required
                                        ></textarea>
                                    </motion.div>

                                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">CATEGORY</label>
                                            <select 
                                                className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                value={categoryValue}
                                                onChange={handleCategoryChange}
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map((category) => (
                                                    <option key={category._id} value={category._id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">BRAND</label>
                                            <input
                                                type="text"
                                                name="brand"
                                                value={formData.brand}
                                                onChange={handleInputChange}
                                                className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder="Enter brand"
                                                required
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">is Featured</label>
                                        <select 
                                            className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            value={featureValue.toString()}
                                            onChange={handleFeaturedChange}
                                        >
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                    </motion.div>

                                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">PRICE</label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleInputChange}
                                                className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder="0.00"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">OLD PRICE</label>
                                            <input
                                                type="number"
                                                name="oldPrice"
                                                value={formData.oldPrice}
                                                onChange={handleInputChange}
                                                className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder="0.00"
                                                required
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">Product stock</label>
                                            <input
                                                type="number"
                                                name="countInStock"
                                                value={formData.countInStock}
                                                onChange={handleInputChange}
                                                className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder="0"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">Rating (0-5 Stars)</label>
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    size="large"
                                                    precision={0.5}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">Number of Reviews</label>
                                        <input
                                            type="number"
                                            name="numReviews"
                                            value={formData.numReviews}
                                            onChange={handleInputChange}
                                            className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="0"
                                            min="0"
                                        />
                                    </motion.div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group flex items-center w-100 overflow-x-auto">
                                                {selectedImages.map((image, index) => (
                                                    <div key={index} className='h-56 w-52 p-3 relative'>
                                                        <img src={image.preview} alt="" className='w-full h-full object-cover rounded-lg'/>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveImage(index)}
                                                            className="absolute top-4 right-4 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                                                        >
                                                            <FaTimes />
                                                        </button>
                                                    </div>
                                                ))}
                                                <div className='h-56 w-52 p-3 inputimg relative'>
                                                    <CiImageOn className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400"/> 
                                                    <input 
                                                        type="file" 
                                                        accept='image/*' 
                                                        onChange={handleImageChange} 
                                                        className='w-full h-full object-cover absolute inset-0 z-10 opacity-0'
                                                        multiple
                                                    />
                                                    <p className="pt-16 absolute inset-0 z-0 top-14 left-1/2 transform -translate-x-1/2 font-bold text-gray-600 dark:text-gray-400 opacity-50">
                                                        Upload Image
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <motion.div variants={itemVariants} className="mt-8">
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl"
                                        >
                                            <FaCloudUploadAlt className="text-2xl" />
                                            Publish Product
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/4">
                            <div className="sticky top-32">
                                <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-xl p-6">
                                    <h6 className="text-gray-900 dark:text-white font-semibold mb-4">Product Images</h6>
                                    <div className="grid grid-cols-2 gap-4">
                                        {selectedImages.map((image, index) => (
                                            <div key={index} className="relative group">
                                                <img 
                                                    src={image.preview} 
                                                    alt="" 
                                                    className="w-full h-24 object-cover rounded-lg border border-gray-200 dark:border-gray-700" 
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveImage(index)}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    {selectedImages.length === 0 && (
                                        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                                            No images added yet
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProductUpload;