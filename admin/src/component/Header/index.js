import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SearchBox from "../SearchBox";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";

import { MdLightMode } from "react-icons/md";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { myContext } from "../../App";
import { motion } from "framer-motion";

const Header = () => {
  const context = useContext(myContext);
  const [isLogged, setIsLoggedIn] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState(false);
  const [isOpenNotificationDrop, setisOpenNotificationDrop] =
    React.useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(isOpenNotificationDrop);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationDrop = () => {
    setisOpenNotificationDrop(true);
  };

  const handleCloseNotificationDrop = () => {
    setisOpenNotificationDrop(false);
  };


  const handleShortcut = (event) => {
    if (event.ctrlKey && event.key == "b") {
      event.preventDefault();
      context.setIsToggleSidebar((prev) => !prev); // Toggle sidebar
    }
  };




  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);
    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);



  const handleShortcutDark = (event) => {
    if (event.ctrlKey && event.key === "d") {
      event.preventDefault();
      context.setThemeMode((prev) => !prev); // Toggle theme
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleShortcutDark);
    return () => {
      window.removeEventListener("keydown", handleShortcutDark);
    };
  }, []);










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
                style={{ width: "100px", height: "40px" }}
                src="https://bloggingx.com/wp-content/uploads/2021/11/sellfy-logo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="col-sm-3 d-flex align-items-center part2">
            <Button
              className="rounded-circle "
              onClick={() =>
                context.setIsToggleSidebar(!context.isTogglesidebar)
              }
            >
              {context.isTogglesidebar ? (
                <IoMdMenu className="text-2xl" />
              ) : (
                <MdMenuOpen className="text-2xl" />
              )}
            </Button>
            <SearchBox />
          </div>

          <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
            <Button
              className="rounded-circle mr-3"
              onClick={() => context.setThemeMode(!context.themeMode)}
            >
              <MdLightMode className="text-2xl" />
            </Button>
            <Button
              className="rounded-circle mr-3 "
              onClick={handleOpenMyAccDrop}
            >
              <AiOutlineShoppingCart className="text-2xl" />
            </Button>
            <Button
              className="rounded-circle mr-3 "
              onClick={handleOpenNotificationDrop}
            >
              <IoMdNotificationsOutline className="text-2xl" />
            </Button>
            <motion.div layout>
              <Menu
                anchorEl={isOpenNotificationDrop}
                id="notification"
                className="notification"
                open={openNotification}
                onClose={handleCloseNotificationDrop}
                onClick={handleCloseNotificationDrop}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <h4 className="ml-2 ">Orders (12)</h4>
                <Divider />
                {/* <MenuItem onClick={handleCloseMyAccDrop}>
            
          </MenuItem> */}
                <Divider />
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img
                            src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="info">
                      <h4 className="infoh4 text-sm mt-2 p-2">
                        <span className="text-sm">
                          <b className="text-sm">Mahmudul </b>added to his
                          favorite list<b> Leather belt steve madden</b>
                        </span>
                      </h4>
                      <span className="time">Few second ago!</span>
                    </div>
                  </div>
                </MenuItem>
                ~
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img
                            src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="info">
                      <h4 className="infoh4 text-sm mt-2 p-2">
                        <span className="text-sm">
                          <b className="text-sm">Mahmudul </b>added to his
                          favorite list<b> Leather belt steve madden</b>
                        </span>
                      </h4>
                      <span className="time">Few second ago!</span>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img
                            src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="info">
                      <h4 className="infoh4 text-sm mt-2 p-2">
                        <span className="text-sm">
                          <b className="text-sm">Mahmudul </b>added to his
                          favorite list<b> Leather belt steve madden</b>
                        </span>
                      </h4>
                      <span className="time">Few second ago!</span>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img
                            src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="info">
                      <h4 className="infoh4 text-sm mt-2 p-2">
                        <span className="text-sm">
                          <b className="text-sm">Mahmudul </b>added to his
                          favorite list<b> Leather belt steve madden</b>
                        </span>
                      </h4>
                      <span className="time">Few second ago!</span>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img
                            src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="info">
                      <h4 className="infoh4 text-sm mt-2 p-2">
                        <span className="text-sm">
                          <b className="text-sm">Mahmudul </b>added to his
                          favorite list<b> Leather belt steve madden</b>
                        </span>
                      </h4>
                      <span className="time">Few second ago!</span>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img
                            src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="info">
                      <h4 className="infoh4 text-sm mt-2 p-2">
                        <span className="text-sm">
                          <b className="text-sm">Mahmudul </b>added to his
                          favorite list<b> Leather belt steve madden</b>
                        </span>
                      </h4>
                      <span className="time">Few second ago!</span>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img
                            src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="info">
                      <h4 className="infoh4 text-sm mt-2 p-2">
                        <span className="text-sm">
                          <b className="text-sm">Mahmudul </b>added to his
                          favorite list<b> Leather belt steve madden</b>
                        </span>
                      </h4>
                      <span className="time">Few second ago!</span>
                    </div>
                  </div>
                </MenuItem>
              </Menu>
            </motion.div>
            <Button className="rounded-circle mr-3 ">
              <MdOutlineEmail className="text-2xl" />
            </Button>

            {isLogged === true ? (
              // my account section
              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDrop}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://i.pinimg.com/originals/16/ed/dc/16eddcc0f802cfdd70bf83a5f1850a6f.jpg"
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
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
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
            ) : (
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  color="success"
                  className="bg-sky-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign in
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
