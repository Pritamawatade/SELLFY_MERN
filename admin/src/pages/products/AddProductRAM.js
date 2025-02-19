import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import * as React from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import { deleteCategory, fetchdatafromapi } from "../../utils/api";
import { LoadingContext } from "../../App";

import { useContext } from "react";

const AddProductRAM = () => {
  const [productRAM, setProductRAM] = useState([]);
  const [productRAMs, setProductRAMs] = useState([]);
  const { startLoading, stopLoading } = useContext(LoadingContext);
  
  const loadingBar = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };


  const handleDelete = async (id) => {
      if (window.confirm("Are you sure you want to delete this RAM?")) {
        try {
          startLoading();
          await deleteCategory(`/api/productRAM`, id);
          toast.success("RAM deleted successfully");
          await fetchProductRAM();
        } catch (error) {
          console.error("Error deleting RAM:", error);
          toast.error(
            "Failed to delete RAM: " +
              (error.response?.data?.message || error.message)
          );
        } finally {
          stopLoading();
        }
      }
    };

  const handleRAMChnage = (e) => {
    setProductRAM(e.target.value);
  };

  const fetchProductRAM = async () => {
    try {
      const res = fetchdatafromapi("/api/productRAM").then((data) => {
        setProductRAMs(data);
      });
    } catch (error) {
      console.error("Error fetching product RAM:", error);
    }
  };
  useEffect(() => {
    
    fetchProductRAM();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productRAM) {
      return toast.error("Please fill all the fields");
    }

    try {
      loadingBar.current.continuousStart();
      const response = await fetch(
        "http://localhost:4000/api/productRAM/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productRAM: productRAM,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("RAM added successfully!");
        await fetchProductRAM();
      } else {
        toast.error(data.message || "Failed to add ram else");
      }
    } catch (error) {
      console.error("Error add ram", error);
      toast.error("Failed to add ram");
    } finally {
      loadingBar.current.complete();
    }
  };

  return (
    <>
      <LoadingBar color="#f11946" ref={loadingBar} shadow={true} />
      <div className="right-content w-100">
        {/* <ToastContainer
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
        /> */}
        <motion.div
          className="p-6 md:p-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="header bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-[#ffffff] font-bold text-2xl md:text-3xl flex items-center gap-3">
              <FaCloudUploadAlt className="text-3xl" />
              Add Product RAM
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

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        {" "}
                        Proudct RAM
                      </label>
                      <input
                        type="text"
                        value={productRAM}
                        onChange={handleRAMChnage}
                        className="form-input bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter product RAM"
                        name="productRAM"
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
              Add Product RAM
            </motion.button>
          </motion.div>
        </form>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1E293B] rounded-lg shadow-lg">
              <thead className="dark:bg-black bg-cyan-400">
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-700 text-left leading-4 text-blue-500 dark:text-blue-300 tracking-wider">
                    Index
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-700 text-left leading-4 text-blue-500 dark:text-blue-300 tracking-wider">
                    Product RAM
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-700 text-left leading-4 text-blue-500 dark:text-blue-300 tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {productRAMs.length > 0 &&
                  productRAMs?.map((ram, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-gray-100 dark:bg-black dark:text-white hover:text-white dark:hover:text-black"
                    >
                      <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        {ram?.productRAM}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        

                        {/* Delete Button */}
                        <motion.button
                          onClick={() => handleDelete(ram._id)}
                          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 mx-1"
                          title="Delete"
                          whileHover={{
                            scale: 1.2,
                            rotate: -5,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                          whileTap={{
                            scale: 0.9,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <FaTrash size={24} />
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AddProductRAM;
