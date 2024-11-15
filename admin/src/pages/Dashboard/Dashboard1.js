import { IoTimerOutline } from "react-icons/io5";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

import Menu from "@mui/material/Menu";  
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
function DashboardBox(props) {  
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
  return (
    <>
      <div
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
        }}
      >
        <div className="d-flex w-100 align-items-center">
          <div className="col1">
            <h4 className="text-white">Total Users</h4>
            <span className="text-white">277</span>
          </div>

          <div className="ml-auto p-2">
            <span className="icon">{props?.icon && props.icon}</span>
          </div>
        </div>
        <div className="d-flex w-100 align-items-center mb-0 mt-3 p-3 info1">
          <p className="text1">Last month</p>
          <span className="icon1 ml-auto ">
            <Button onClick={handleClick}><HiOutlineDotsVertical /></Button>
            <Menu
            className="border rounded-full"
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
           <span className="mr-1"><IoTimerOutline /></span> {option}
          </MenuItem>
        ))}
      </Menu>
          </span>
        </div>
      </div>
    </>
  ); 
}

export default DashboardBox;
