import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { postData } from '../../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingContext } from '../../App';

const CategoryUpload = () => {

    const { startLoading, stopLoading } = useContext(LoadingContext);

    const [formFields, setFormFields] = React.useState({
        name: '',
        image: '',
        color: ''
    })

    const inputChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        })
    }

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

    const addCategory = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formFields.name || !formFields.image || !formFields.color) {
           
            toast.error('Please fill in all required fields', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                }); 
            return;
        }

        try {
            startLoading();
            const response = await postData("/api/category/create", formFields);

            if (response && response.success) {
                toast.success('Category added successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    });
                setFormFields({
                    name: '',
                    image: '',
                    color: ''
                });
            } else {
                alert(response?.message || 'Failed to add category');
            }
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error('Failed to add category: ' + (error.response?.data?.message || error.message));
        } finally {
            stopLoading();
        }
    }


    return (
        <>
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
            <div className="right-content w-100">
                <motion.div
                    className="p-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="header  dark:bg-gray-800 border rounded-xl p-3 shadow-sm">
                        <h3 className="text-[#000000] dark:text-[#ffffff] font-bold text-xl">Category Upload</h3>
                    </div>
                </motion.div>

                <form className="px-4 md:px-0" onSubmit={addCategory}>
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
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">Category Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                            placeholder="Enter category name"
                                            onChange={inputChange}
                                            name='name'
                                            value={formFields.name}
                                        />
                                    </motion.div>
                                  

                                    <motion.div className="form-group mb-4" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">Image URL</label>
                                        <input
                                            type="text"
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                            placeholder="Enter image URL"
                                            onChange={inputChange}
                                            name='image'
                                            value={formFields.image}
                                        />
                                    </motion.div>

                                    <motion.div className="form-group mb-4" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">Color code</label>
                                        <input
                                            type="text"
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4 w-full"
                                            placeholder="Enter category color code"
                                            onChange={inputChange}
                                            name="color"
                                            value={formFields.color}
                                        />
                                    </motion.div>



                                </div>

                                <motion.div variants={itemVariants} className="mt-6">

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        type='submit'
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-base md:text-lg"
                                    >
                                        <FaCloudUploadAlt className="text-xl" />
                                        CREATE CATEGORY
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

export default CategoryUpload;