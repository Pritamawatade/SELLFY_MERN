import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt } from "react-icons/fa";


const ProductUpload = () => {
    const [value, setValue] = React.useState(2);

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
                        <h4 className="text-black font-bold text-xl dark:text-white">Product Upload</h4>
                    </div>
                </motion.div>

                <form>
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
                                        className="mb-4 text-gray-900 dark:text-white font-bold"
                                        variants={itemVariants}
                                    >
                                        Basic Information
                                    </motion.h5>

                                    <motion.div className="form-group mb-4" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">TITLE</label>
                                        <input
                                            type="text"
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4"
                                            placeholder="Enter product title"
                                        />
                                    </motion.div>

                                    <motion.div className="form-group mb-4" variants={itemVariants}>
                                        <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">DESCRIPTION</label>
                                        <textarea
                                            className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4"
                                            rows="4"
                                            placeholder="Enter product description"
                                        ></textarea>
                                    </motion.div>

                                    <motion.div className="row mb-4" variants={itemVariants}>
                                        <div className="col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">CATEGORY</label>
                                            <select className="form-select bg-[#f0f0f0] dark:bg-gray-700 dark:text-white text-gray-900 border-0 rounded mb-4">
                                                <option>Mens</option>
                                                <option>Women</option>
                                                <option>Kids</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">BRAND</label>
                                            <select className="form-select bg-[#f0f0f0] dark:bg-gray-700 dark:text-white text-gray-900 border-0 rounded mb-4">
                                                <option>Peter India</option>
                                                <option>livon</option>
                                                <option>Twenty</option>
                                            </select>
                                        </div>
                                    </motion.div>

                                    <motion.div className="row" variants={itemVariants}>
                                        <div className="col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">REGULAR PRICE</label>
                                            <input
                                                type="number"
                                                className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4"
                                                placeholder="0.00"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">DISCOUNT PRICE</label>
                                            <input
                                                type="number"
                                                className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.div className="row" variants={itemVariants}>
                                        <div className="col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">Product stock</label>
                                            <input
                                                type="number"
                                                className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4"
                                                placeholder="0.00"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">Rating</label> <br />
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />

                                        </div>

                                        <motion.div className="col-sm-12" variants={itemVariants}>
                                            <label className="text-gray-700 dark:text-gray-300 mb-2 font-bold">TAGS</label>
                                            <textarea
                                                className="form-control bg-[#f0f0f0] dark:bg-gray-700 dark:text-white border-0 rounded mb-4"
                                                rows="4"
                                                placeholder="Enter tags"
                                            ></textarea>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>


                            <button className='relative publish hover:bg-blue-600 border rounded w-100 bg-blue-500 p-2 text-lg font-bold text-white'><FaCloudUploadAlt /> PUBLISH AND VIEW</button>
                        </div>

                        

                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductUpload





// video is 30 min long 