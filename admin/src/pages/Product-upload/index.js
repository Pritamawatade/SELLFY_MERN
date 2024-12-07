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
    const [value, setValue] = React.useState(2);
    const [selectedImages, setSelectedImages] = useState([]);
    const [featureValue, setFeatureValue] = useState(false);
    const [categoryValue, setCategoryValue] = useState('');
    const [ratingValue, setRatingValue] = useState(false);
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
        setFeatureValue(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategoryValue(e.target.value);
    };

    const handleAddImage = () => {
        if (imageUrl && imageUrl.trim() !== '') {
            setSelectedImages([...selectedImages, imageUrl.trim()]);
            setImageUrl(''); 
        }
    };

    const handleRatingChange = (newValue) => {
        setRatingValue(newValue);
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form fields
        if (!formData.name || !formData.description || !categoryValue || !formData.brand || 
            !formData.regularPrice || !formData.discountPrice || !formData.stock || !selectedImages.length) {
            toast.error('Please fill in all required fields and add at least one image');
            return;
        }
        
        try {
            loadingBar.current.continuousStart();
            
            const productData = {
                name: formData.name,
                description: formData.description,
                category: categoryValue,
                brand: formData.brand,
                isFeatured: featureValue === 'True',
                price: parseFloat(formData.regularPrice),
                oldPrice: parseFloat(formData.discountPrice),
                countInStock: parseInt(formData.stock),
                rating: value,
                images: selectedImages
            };

            const response = await postData('/api/products/create', productData);

            if (response) {
                loadingBar.current.complete();
                toast.success('Product uploaded successfully!');
                // Reset form
                setFormData({
                    name: '',
                    description: '',
                    brand: '',
                    regularPrice: '',
                    discountPrice: '',
                    stock: '',
                });
                setSelectedImages([]);
                setValue(0);
                setCategoryValue('');
                setFeatureValue(false);
            } else {
                throw new Error('Failed to upload product');
            }
        } catch (error) {
            loadingBar.current.complete();
            console.error('Error uploading product:', error);
            toast.error('Failed to upload product. Please try again.');
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        brand: '',
        regularPrice: '',
        discountPrice: '',
        stock: '',
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
                                            <select 
                                                className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                name="brand"
                                                value={formData.brand}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select Brand</option>
                                                <option value="Peter India">Peter India</option>
                                                <option value="livon">livon</option>
                                                <option value="Twenty">Twenty</option>
                                            </select>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">is Featured</label>
                                        <select 
                                            className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            value={featureValue}
                                            onChange={handleFeaturedChange}
                                        >
                                            <option>True</option>
                                            <option>False</option>
                                        </select>
                                    </motion.div>

                                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">REGULAR PRICE</label>
                                            <input
                                                type="number"
                                                name="regularPrice"
                                                value={formData.regularPrice}
                                                onChange={handleInputChange}
                                                className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder="0.00"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">DISCOUNT PRICE</label>
                                            <input
                                                type="number"
                                                name="discountPrice"
                                                value={formData.discountPrice}
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
                                                name="stock"
                                                value={formData.stock}
                                                onChange={handleInputChange}
                                                className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder="0"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">Rating</label>
                                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    size="large"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">Product Images</label>
                                        <div className="flex gap-4">
                                            <textarea
                                                className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                rows="4"
                                                placeholder="Image URL"
                                                value={imageUrl}
                                                onChange={(e) => setImageUrl(e.target.value)}
                                            ></textarea>
                                            <button
                                                onClick={handleAddImage}
                                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 h-fit flex items-center gap-2"
                                                type="button"
                                            >
                                                <span className="text-lg">+</span>
                                                Add
                                            </button>
                                        </div>
                                    </motion.div>

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
                                                    src={image} 
                                                    alt="" 
                                                    className="w-full h-24 object-cover rounded-lg border border-gray-200 dark:border-gray-700" 
                                                />
                                                <button
                                                    onClick={() => {
                                                        const newImages = selectedImages.filter((_, i) => i !== index);
                                                        setSelectedImages(newImages);
                                                    }}
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