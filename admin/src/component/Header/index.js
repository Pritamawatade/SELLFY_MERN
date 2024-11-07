import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import React from "react";
import Button from "@mui/material/Button";
import SearchBox from "../SearchBox";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from '@mui/material/Avatar';


const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          <div className="col-sm-2 part1">
            <Link
              to="/"
              className="d-flex align-items-center logo no-underline"
            >
              <img
                style={{ width: "76px" }}
                src="https://bloggingx.com/wp-content/uploads/2021/11/sellfy-logo.png"
                alt=""
                srcset=""
              />
            </Link>
          </div>

          <div className="col-sm-3 d-flex align-items-center part2">
            <Button className="rounded-circle ">
              <MdMenuOpen />
            </Button>
            <SearchBox />
          </div>

          <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
            <Button className="rounded-circle mr-3">
              <MdLightMode className="text-2xl" />
            </Button>
            <Button className="rounded-circle mr-3 "   onClick={handleOpenMyAccDrop}    >
              <AiOutlineShoppingCart className="text-2xl" />
            </Button>
            <Button className="rounded-circle mr-3 ">
              <IoMdNotificationsOutline className="text-2xl" />
            </Button>
            <Button className="rounded-circle mr-3 ">
              <MdOutlineEmail className="text-2xl" />
            </Button>

            <div className="myAccWrapper">
              <Button
                className="myAcc d-flex align-items-center"
                onClick={handleOpenMyAccDrop}
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </span>
                </div>

                <div className="userInfo  pl-0 ">
                  <h5 className="text-sm mb-0 ml-2 font-bold text-center">
                    Pritam
                  </h5>
                  <p className="text-xs text-opacity-10 mt-0 opacity-3 font-normal">
                    @pritam_awatade
                  </p>
                </div>
              </Button>

              <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMyAccDrop}
        onClick={handleCloseMyAccDrop}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={handleCloseMyAccDrop}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
       
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
