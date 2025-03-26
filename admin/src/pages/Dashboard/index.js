import { ToastContainer } from "react-toastify";
import { Chart } from "react-google-charts";
import Rating from "@mui/material/Rating";

import DashboardBox from "./Dashboard1";
import { FaCircleUser } from "react-icons/fa6";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import React, { useContext, useEffect, useRef } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";

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
import { use } from "react";
import { myContext } from "../../App";

const Dashboard = () => {
  const [showBy, setshowBy] = React.useState("");
  const [showByCategory, setShowByCategory] = React.useState("");
  const [productList, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const loadingBar = useRef(null);
  const context = useContext(myContext);

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
    
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });

    setCategories(context.categories);
  }, []);

  const options = [
    "last day",
    "last week",
    "last month",
    "last year",
    "custom range",
  ];
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = [
    ["Task", "Hours per Day"],
    ["Fashion", 9],
    ["Food", 2],
    ["Entainment", 2],
    ["Electorics", 2],
    ["watched", 7],
  ];

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

  const options1 = {
    backgroundColor: { fill: "transparent" },
  };

  const deleteProduct = (id) => {
    loadingBar.current.continuousStart();

    deleteCategory(`/api/products`, id).then((res) => {
      fetchdatafromapi("/api/products/")
        .then((res) => {
          setProducts(res || []);
          toast.success("Product deleted successfully!");
          loadingBar.current.complete();
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setProducts([]);
        });
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
      <LoadingBar color="#f11946" ref={loadingBar} shadow={true} />
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
      <div className="row">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex  ">
            <div className="flex">
              <DashboardBox
                color={["#20a559", "#46d281"]}
                icon={<FaCircleUser />}
              />
              <DashboardBox
                color={["#c013e2", "#e060fa"]}
                icon={<BsCartPlusFill />}
              />
            </div>
            <div className="flex">
              <DashboardBox
                color={["#2e7ae6", "#5babf3"]}
                icon={<AiFillProduct />}
              />
              <DashboardBox
                color={["#5dacf4", "#f2ca27"]}
                icon={<MdReviews />}
              />
            </div>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="col-md-4"
        >
          <div
            className="box w-100 w-full border-2 rounded-xl"
            style={{
              background: "linear-gradient(to bottom, #1a51b7, #296ef5)",
            }}
          >
            {/* <motion.div className="flex items-center justify-end">
              <h5 className="text-white font-bold p-2 text-xl">Total sales</h5>
              <Button onClick={handleClick}>
                <HiOutlineDotsVertical />
              </Button>
              <Menu
                className="border rounded-full"
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    <span className="mr-1">
                      <IoTimerOutline />
                    </span>{" "}
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </motion.div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options1}
              width={"100%"}
              height={"400px"}
            /> */}
          </div>
        </motion.div>
      </div>

      <div className="shadow mt-3 border-0 p-3 card table1">
        <h3 className="font-bold text-gray-700"> Product</h3>
        <div className="row cardFilters mt-3">
          {/* <div className="col-md-3">
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
          </div> */}

          {/* <div className="col-md-3">
            <h5 className="mt-3 lableText">Category By</h5>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={showByCategory}
              label="ShowBy"
              onChange={handleChange1}
              className="w-100 category-select bg-gray-800 text-white border border-gray-700 rounded"
              placeholder="Select Category"
            >
              {categories.map((category) => (
                <MenuItem
                  key={category._id}
                  value={category._id}
                  className="bg-gray-800 text-white hover:bg-gray-700"
                  style={{ backgroundColor: "#2d3748", color: "#fff" }} // Tailwind bg-gray-800 and text-white equivalent
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </div> */}
        </div>

        <div className="table-responsive mt-3">
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
                    <td>{product?.brand || "No Brand"}</td>
                    <td>${product?.price || 0}</td>
                    <td>${product?.oldPrice || 0}</td>
                    <td>{product?.countInStock || 0}</td>
                    <td>
                      <Rating
                        name="read-only"
                        value={product?.numReviews || 0}
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
                          <Button className="mr-1 flex items-center">
                            <FaEye />
                          </Button>
                        </Link>
                        <Link to={`/product/edit/${product._id}`}>
                          <Button className="mr-1" color="success">
                            <MdEdit />
                          </Button>
                        </Link>
                        <Button
                          onClick={() => deleteProduct(product._id)}
                          color="secondary"
                        >
                          <MdDeleteForever />
                        </Button>
                      </span>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
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
          Showing 1 to 10 of {productList?.totalDocs} entries
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
