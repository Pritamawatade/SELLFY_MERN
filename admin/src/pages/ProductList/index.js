import { ToastContainer } from "react-toastify";
import Rating from "@mui/material/Rating";

import React, { useEffect, useRef } from "react";

import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import Pagination from "@mui/material/Pagination";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { deleteCategory, fetchdatafromapi } from "../../utils/api";
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-toastify";

const ProductList = () => {
  const [showBy, setshowBy] = React.useState("");
  const [showByCategory, setShowByCategory] = React.useState("");
  const [productList, setProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const loadingBar = useRef(null);

  const handleChange = (event) => {
    setshowBy(event.target.value);
  };
  const handleChange1 = (event) => {
    setShowByCategory(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchdatafromapi("/api/products/")
      .then((res) => {
        setProducts(res || []);
        console.log(productList);
        console.log(res);
        console.log(productList.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, []);

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.9, transition: { duration: 0.2 } },
  };

  const boxVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,

      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const deleteProduct = (id) => {
    loadingBar.current.continuousStart();

    deleteCategory(`/api/products`, id)
      .then((res) => {
        fetchdatafromapi("/api/products/")
          .then((res) => {
            setProducts(res || []);
            loadingBar.current.complete();
            toast.success("Product deleted successfully!"); // Ensure this line is here
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
            setProducts([]);
            loadingBar.current.complete(); // Ensure loading bar completes even on error
          });
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        loadingBar.current.complete(); // Ensure loading bar completes on delete error
      });
  };

  const handleChangePage = (event, value) => {
    loadingBar.current.continuousStart();
    fetchdatafromapi(`/api/products/?page=${value}`)
      .then((res) => {
        setProducts(res || []);
        loadingBar.current.complete();
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
        loadingBar.current.complete();
      });
  };

  return (
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
      <LoadingBar color="#f11946" ref={loadingBar} shadow={true} />
      <div className="shadow mt-3 border-0 p-3 card table1">
        <h3 className="font-bold text-gray-700">Best Selling Product</h3>
        <div className="row cardFilters mt-3">
          <div className="col-md-3">
            <h5 className="mt-3 lableText">SHOW BY</h5>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={showBy}
              label="ShowBy"
              onChange={handleChange}
              className="w-100 showBy-select"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div className="col-md-3">
            <h5 className="mt-3 lableText">Category By</h5>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={showByCategory}
              label="ShowBy"
              onChange={handleChange1}
              className="w-100 category-select"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>

        <div className="tableWrapper overflow-visible mb-2">
          <div className="table-responsive mt-3 w-100">
            <div className="table table-bordered ">
              <thead className="title">
                <motion.tr
                  variants={boxVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className=""
                >
                  <th>UID</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>SUB CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>OLD PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>FEATURED</th>
                  <th>DATE CREATED</th>
                  <th>ACTIONS</th>
                </motion.tr>
              </thead>
              <tbody>
                {productList?.products?.length !== 0 &&
                  productList?.products?.map((product, index) => (
                    <motion.tr
                      key={product._id}
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <td className="font-bold">{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3 p-2">
                          <div className="imgWrapper">
                            <div className="image w-16 h-16 rounded overflow-hidden">
                              <img
                                src={product?.images?.[0] || ""}
                                alt={product?.name || "Product Image"}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="text font-medium">
                            {`${
                              product?.name?.split(" ").slice(0, 5).join(" ") ||
                              "Unnamed Product"
                            }${
                              product?.name?.split(" ").length > 5 ? " ..." : ""
                            }`}
                          </div>
                        </div>
                      </td>
                      <td>{product?.category?.name || "Uncategorized"}</td>
                      <td>
                        {product?.subCategory?.subCategory || "Uncategorized"}
                      </td>
                      <td>{product?.brand || "No Brand"}</td>
                      <td>${product?.price || 0}</td>
                      <td>${product?.oldPrice || 0}</td>
                      <td>{product?.countInStock || 0}</td>
                      <td>
                        <Rating
                          name="read-only"
                          value={product?.rating || 3}
                          size="large"
                          precision={0.5}
                          readOnly
                        />
                      </td>
                      <td>{product?.isFeatured ? "Yes" : "No"}</td>
                      <td>
                        {product?.dateCreated
                          ? new Date(product.dateCreated).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td id="actions" className="m-0 p-0">
                        <span className="m-0 p-0 block">
                          <Link to="/product/details">
                            <motion.button
                              className="mr-2 p-2 flex items-center justify-center bg-blue-500 text-white rounded-lg shadow-lg"
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              <FaEye size={24} />
                            </motion.button>
                          </Link>
                          <Link to={`/product/edit/${product._id}`}>
                            <motion.button
                              className="mr-2 p-2 flex items-center justify-center bg-green-500 text-white rounded-lg shadow-lg"
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              <MdEdit size={24} />
                            </motion.button>
                          </Link>
                          <motion.button
                            onClick={() => deleteProduct(product._id)}
                            className="p-2 flex items-center justify-center bg-red-500 text-white rounded-lg shadow-lg"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <MdDeleteForever size={24} />
                          </motion.button>
                        </span>
                      </td>
                    </motion.tr>
                  ))}
              </tbody>
            </div>
          </div>
        </div>
        <Pagination
          count={productList?.totalPages}
          onChange={handleChangePage}
          color="primary"
          showFirstButton
          showLastButton
        />

        <p className="text-gray-400 text-lg font-normal">
          Showing {productList?.page} of {productList?.totalPages} pages
        </p>
      </div>
    </div>
  );
};

export default ProductList;
