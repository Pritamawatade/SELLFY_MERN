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
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const Dashboard = () => {
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

  const options1 = {
    title: "My Daily Activities",
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
        <div className="col-md-4">
          <div
            className="box w-100 w-full border rounded"
            style={{
              background: "linear-gradient(to bottom, #1a51b7, #296ef5)",
            }}
          >
            <div className="flex items-center justify-end">
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
            </div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options1}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>

      <div className="shadow mt-3 border p-3 card">
        <h3 className="font-bold">Best Selling Product</h3>
      </div>
    </div>
  );
};

export default Dashboard;
