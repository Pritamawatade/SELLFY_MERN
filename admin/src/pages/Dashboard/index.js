import { Chart } from "react-google-charts";

import DashboardBox from "./Dashboard1";
import { FaCircleUser } from "react-icons/fa6";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import Pagination from '@mui/material/Pagination';


import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";
const Dashboard = () => {
  const [showBy, setshowBy] = React.useState("");
  const [showByCategory, setShowByCategory] = React.useState("");

  const handleChange = (event) => {
    setshowBy(event.target.value);
  };
  const handleChange1 = (event) => {
    setShowByCategory(event.target.value);
  };

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
      opacity: 0
    },
    visible: {
      y: 0,
    
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const options1 = {
    backgroundColor: { fill: "transparent" },
  };
  return (
    <div className="right-content w-100">
      <div className="row">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
            <DashboardBox
              color={["#20a559", "#46d281"]}
              icon={<FaCircleUser />}
            />
            <DashboardBox
              color={["#c013e2", "#e060fa"]}
              icon={<BsCartPlusFill />}
            />
            <DashboardBox
              color={["#2e7ae6", "#5babf3"]}
              icon={<AiFillProduct />}
            />
            <DashboardBox color={["#5dacf4", "#f2ca27"]} icon={<MdReviews />} />
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="col-md-4">
          <div
            className="box w-100 w-full border-2 rounded-xl"
            style={{
              background: "linear-gradient(to bottom, #1a51b7, #296ef5)",
              
            }}
          >
            <motion.div
              className="flex items-center justify-end">
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
            />
          </div>
        </motion.div>
      </div>

      <div className="shadow mt-3 border-0 p-3 card">
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
                <th>STOCK</th>
                <th>RATING</th>
                <th>ORDERS</th>
                <th>SALES</th>
                <th>ACTIONS</th>
              </motion.tr>
            </thead>
            <tbody>
              <motion.tr
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="font-bold">#1</td>
                <td>
                  <div className="flex items-center justify-center mb-0">
                    <div className="imgWrapper">
                      <div className="image w-16 ">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" />
                      </div>
                    </div>
                    <div className="text">
                      Tops and skirt set for Female...
                      Women's exclusive summ
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>reachman</td>
                <td>
                  <span className="line-through text-red-400 text-lg">$21</span><br />
                  <span className="text-green-500 text-xl">$19</span>
                </td>
                <td>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></td>
                <td>5(16)</td>
                <td>280</td>
                <td>$23</td>
                <td id="actions" className="m-0 p-0">
                  <span className="m-0 p-0 block">
                    <Button className="mr-1 flex items-center">
                      <FaEye />
                    </Button>
                    <Button className="mr-1" color="success">
                      <MdEdit />
                    </Button>
                    <Button color="secondary">
                      <MdDeleteForever />
                    </Button>
                  </span>
                </td>
              </motion.tr>

              <motion.tr
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="font-bold">#1</td>
                <td>
                  <div className="flex items-center justify-center mb-0">
                    <div className="imgWrapper">
                      <div className="image w-16">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" />
                      </div>
                    </div>
                    <div className="text">
                      Tops and skirt set for Female...
                      Women's exclusive summ
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>reachman</td>
                <td>
                  <span className="line-through text-red-400 text-lg">$21</span><br />
                  <span className="text-green-500 text-xl">$19</span>
                </td>
                <td>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></td>
                <td>5(16)</td>
                <td>280</td>
                <td>$23</td>
                <td id="actions" className="m-0 p-0">
                  <span className="m-0 p-0 block">
                    <Button className="mr-1 flex items-center">
                      <FaEye />
                    </Button>
                    <Button className="mr-1" color="success">
                      <MdEdit />
                    </Button>
                    <Button color="secondary">
                      <MdDeleteForever />
                    </Button>
                  </span>
                </td>
              </motion.tr>

              <motion.tr
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="font-bold">#1</td>
                <td>
                  <div className="flex items-center justify-center mb-0">
                    <div className="imgWrapper">
                      <div className="image w-16">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" />
                      </div>
                    </div>
                    <div className="text">
                      Tops and skirt set for Female...
                      Women's exclusive summ
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>reachman</td>
                <td>
                  <span className="line-through text-red-400 text-lg">$21</span><br />
                  <span className="text-green-500 text-xl">$19</span>
                </td>
                <td>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></td>
                <td>5(16)</td>
                <td>280</td>
                <td>$23</td>
                <td id="actions" className="m-0 p-0">
                  <span className="m-0 p-0 block">
                    <Button className="mr-1 flex items-center">
                      <FaEye />
                    </Button>
                    <Button className="mr-1" color="success">
                      <MdEdit />
                    </Button>
                    <Button color="secondary">
                      <MdDeleteForever />
                    </Button>
                  </span>
                </td>
              </motion.tr>

              <motion.tr
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="font-bold">#1</td>
                <td>
                  <div className="flex items-center justify-center mb-0">
                    <div className="imgWrapper">
                      <div className="image w-16">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" />
                      </div>
                    </div>
                    <div className="text">
                      Tops and skirt set for Female...
                      Women's exclusive summ
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>reachman</td>
                <td>
                  <span className="line-through text-red-400 text-lg">$21</span><br />
                  <span className="text-green-500 text-xl">$19</span>
                </td>
                <td>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></td>
                <td>5(16)</td>
                <td>280</td>
                <td>$23</td>
                <td id="actions" className="m-0 p-0">
                  <span className="m-0 p-0 block">
                    <Button className="mr-1 flex items-center">
                      <FaEye />
                    </Button>
                    <Button className="mr-1" color="success">
                      <MdEdit />
                    </Button>
                    <Button color="secondary">
                      <MdDeleteForever />
                    </Button>
                  </span>
                </td>
              </motion.tr>

              <motion.tr
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="font-bold">#1</td>
                <td>
                  <div className="flex items-center justify-center mb-0">
                    <div className="imgWrapper">
                      <div className="image w-16">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" />
                      </div>
                    </div>
                    <div className="text">
                      Tops and skirt set for Female...
                      Women's exclusive summ
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>reachman</td>
                <td>
                  <span className="line-through text-red-400 text-lg">$21</span><br />
                  <span className="text-green-500 text-xl">$19</span>
                </td>
                <td>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></td>
                <td>5(16)</td>
                <td>280</td>
                <td>$23</td>
                <td id="actions" className="m-0 p-0">
                  <span className="m-0 p-0 block">
                    <Button className="mr-1 flex items-center">
                      <FaEye />
                    </Button>
                    <Button className="mr-1" color="success">
                      <MdEdit />
                    </Button>
                    <Button color="secondary">
                      <MdDeleteForever />
                    </Button>
                  </span>
                </td>
              </motion.tr>

              <motion.tr
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="font-bold">#1</td>
                <td>
                  <div className="flex items-center justify-center mb-0">
                    <div className="imgWrapper">
                      <div className="image w-16">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" />
                      </div>
                    </div>
                    <div className="text">
                      Tops and skirt set for Female...
                      Women's exclusive summ
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>reachman</td>
                <td>
                  <span className="line-through text-red-400 text-lg">$21</span><br />
                  <span className="text-green-500 text-xl">$19</span>
                </td>
                <td>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></td>
                <td>5(16)</td>
                <td>280</td>
                <td>$23</td>
                <td id="actions" className="m-0 p-0">
                  <span className="m-0 p-0 block">
                    <Button className="mr-1 flex items-center">
                      <FaEye />
                    </Button>
                    <Button className="mr-1" color="success">
                      <MdEdit />
                    </Button>
                    <Button color="secondary">
                      <MdDeleteForever />
                    </Button>
                  </span>
                </td>
              </motion.tr>

              <motion.tr
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="font-bold">#1</td>
                <td>
                  <div className="flex items-center justify-center mb-0">
                    <div className="imgWrapper">
                      <div className="image w-16">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" />
                      </div>
                    </div>
                    <div className="text">
                      Tops and skirt set for Female...
                      Women's exclusive summ
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>reachman</td>
                <td>
                  <span className="line-through text-red-400 text-lg">$21</span><br />
                  <span className="text-green-500 text-xl">$19</span>
                </td>
                <td>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></td>
                <td>5(16)</td>
                <td>280</td>
                <td>$23</td>
                <td id="actions" className="m-0 p-0">
                  <span className="m-0 p-0 block">
                    <Button className="mr-1 flex items-center">
                      <FaEye />
                    </Button>
                    <Button className="mr-1" color="success">
                      <MdEdit />
                    </Button>
                    <Button color="secondary">
                      <MdDeleteForever />
                    </Button>
                  </span>
                </td>
              </motion.tr>

            </tbody>
          </div>
        </div>
        <Pagination count={10} color="primary" showFirstButton showLastButton />

        <p className="text-gray-400 text-lg font-normal">Showing 1 to 10 of 50 entries</p>
      </div>
    </div>
  );
};

export default Dashboard;
