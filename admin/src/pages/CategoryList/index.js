import React, { useState, useEffect, useContext } from 'react';
import { fetchdatafromapi, editdata, deleteCategory } from '../../utils/api';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Modal, Box, TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingContext } from '../../App';
import { motion } from 'framer-motion';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        image: '',
        color: '',
        subCategory: ''
    });
    const { startLoading, stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        startLoading();
        try {
            const data = await fetchdatafromapi('/api/category/');
            if (data) {
                setCategories(data);
            }
            else {
                console.log("error in category list:", data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            toast.error('Failed to fetch categories: ' + (error.response?.data?.message || error.message));
        } finally {
            stopLoading();
        }
    };

    const handleView = (category) => {
        setSelectedCategory(category);
        setEditForm({
            name: category.name,
            image: category.image,
            color: category.color
        });
        setOpenModal(true);
    };

    const handleEdit = async () => {
        try {
            if (selectedCategory) {
                startLoading();
                const response = await editdata(`/api/category/${selectedCategory._id}`, editForm);
                if (response && response.success) {
                    toast.success('Category updated successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setOpenModal(false);
                    await fetchCategories();
                } else {
                    alert(response?.message || 'Failed to update category');
                }
            }
        } catch (error) {
            console.error('Error updating category:', error);
            toast.error('Failed to update category: ' + (error.response?.data?.message || error.message));
        } finally {
            stopLoading();
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            try {
                startLoading();
                await deleteCategory(`/api/category`, id);
                toast.success('Category deleted successfully');
                await fetchCategories();
            } catch (error) {
                console.error('Error deleting category:', error);
                toast.error('Failed to delete category: ' + (error.response?.data?.message || error.message));
            } finally {
                stopLoading();
            }
        }
    };

    const textFieldStyling = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(156, 163, 175, 0.3)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(156, 163, 175, 0.5)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(59, 130, 246, 0.5)',
            },
            '& input': {
                color: 'inherit',
                '.dark &': {
                    color: '#ffffff',
                },
            },
            backgroundColor: 'rgba(156, 163, 175, 0.05)',
        },
        '& .MuiInputLabel-root': {
            color: 'inherit',
            '.dark &': {
                color: '#ffffff',
            },
            '&.Mui-focused': {
                color: '#3b82f6',
                '.dark &': {
                    color: '#60a5fa',
                },
            },
        },
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 min-h-screen">
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
            <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Category List</h1>
            <div className="overflow-x-auto rounded-lg shadow">
                <motion.table
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-lg overflow-hidden"
                >
                    <thead className="bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-700 dark:to-blue-800">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">UID</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Image</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Name</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Sub Category</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Color</th>
                            <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {categories.map((category, index) => (
                            <motion.tr
                                key={category._id}
                                initial={{ opacity: 0, translateY: 10 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="hover:bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 hover:shadow-md transition-all"
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200 font-medium">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-16 h-16 object-cover rounded-full border-2 border-teal-400 dark:border-teal-600 shadow-md hover:scale-105 transform transition-transform"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200 font-medium">{category.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400 font-medium">{category.subCategory}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div
                                        className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-500 shadow-inner"
                                        style={{ backgroundColor: category.color }}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button
                                        onClick={() => handleView(category)}
                                        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mx-1 transition-transform transform hover:scale-110"
                                        title="View"
                                    >
                                        <FaEye size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleEdit(category)}
                                        className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 mx-1 transition-transform transform hover:scale-110"
                                        title="Edit"
                                    >
                                        <FaEdit size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(category._id)}
                                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 mx-1 transition-transform transform hover:scale-110"
                                        title="Delete"
                                    >
                                        <FaTrash size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </motion.table>

            </div>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                className="dark:bg-gray-900 bg-black bg-opacity-50 dark:bg-opacity-50"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    backgroundColor: 'var(--bg-modal-color, #ffffff)',
                    color: 'var(--text-modal-color, #1f2937)',
                    '.dark &': {
                        backgroundColor: '#1f2937',
                        color: '#f3f4f6',
                    }
                }}>
                    <h2 className="text-xl font-bold mb-4 text-inherit">Edit Category</h2>
                    <div className="space-y-4">
                        <TextField
                            fullWidth
                            label="Name"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            sx={textFieldStyling}
                        />
                        <TextField
                            fullWidth
                            label="Sub Category"
                            value={editForm.subCategory}
                            onChange={(e) => setEditForm({ ...editForm, subCategory: e.target.value })}
                            sx={textFieldStyling}
                        />
                        <TextField
                            fullWidth
                            label="Image URL"
                            value={editForm.image}
                            onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                            sx={textFieldStyling}
                        />
                        <TextField
                            fullWidth
                            label="Color Code"
                            value={editForm.color}
                            onChange={(e) => setEditForm({ ...editForm, color: e.target.value })}
                            sx={textFieldStyling}
                        />
                        <div className="flex justify-end space-x-2 mt-4">
                            <Button
                                onClick={() => setOpenModal(false)}
                                variant="outlined"
                                sx={{
                                    color: 'inherit',
                                    borderColor: 'rgba(156, 163, 175, 0.3)',
                                    '&:hover': {
                                        borderColor: 'rgba(156, 163, 175, 0.5)',
                                        backgroundColor: 'rgba(156, 163, 175, 0.05)',
                                    },
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleEdit}
                                variant="contained"
                                sx={{
                                    backgroundColor: '#3b82f6',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#2563eb',
                                    },
                                }}
                            >
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default CategoryList;