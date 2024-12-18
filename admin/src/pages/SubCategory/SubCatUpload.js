
import * as React from 'react';

import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";

const AddSubCategory = () => {
    const [value, setValue] = React.useState(0);

    const [categoryValue, setCategoryValue] = useState();
    const [subCategoryValue, setSubCategoryValue] = useState('');
    const [categories, setCategories] = useState([]);
    const loadingBar = useRef(null);

    const context = React.useContext(myContext);


    useEffect(() => {
        setCategories(context.categories);
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


    const handleCategoryChange = (e) => {
        setCategoryValue(e.target.value);
    };

    const handleSubCategoryChange = (e) => {
        setSubCategoryValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        loadingBar.current.continuousStart();
    
        try {
            const response = await fetch('http://localhost:4000/api/subCategory/create', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    category: categoryValue,
                    subCategory: subCategoryValue,
                }),
            });
    
            const data = await response.json();
    
            if (data.success) {
                toast.success('Sub Category created successfully!');
                setCategoryValue('');
                setSubCategoryValue('');
            } else {
                toast.error(data.message || 'Failed to create Sub Category');
            }
        } catch (error) {
            console.error('Error creating Sub Category:', error);
            toast.error('Failed to create Sub Category');
        } finally {
            loadingBar.current.complete();
        }
    };
    

    const [formData, setFormData] = useState({
        category: '',
        subCategory: '',
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
                            SubCategory Upload
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
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider"> SUBCATEGORY</label>
                                            <input
                                                type="text"
                                                value={subCategoryValue}
                                                onChange={handleSubCategoryChange}
                                                className="form-input bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                placeholder="Enter Sub Category"
                                                name='subCategory'
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
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
                            Publish Sub Category
                        </motion.button>
                    </motion.div>
                </form>
            </div>
        </>
    );
};

export default AddSubCategory;