import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/sellfy-wordmark-1.svg";
import CountryDrop from "./CountryDropdown";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { mycontext } from "../../App";
import Avatar from "@mui/material/Avatar";
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
import React from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";

const Header = () => {
  const context = useContext(mycontext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate= useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  
  const logout = () =>{
    localStorage.clear()
    context?.setUser({});
    context?.setIsLogin(false)
    toast.success("logout successfully")
    setTimeout(()=>{
      navigate("/signin")
    },2000)
  }

  return (
    <>
      <div className="headerwrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mt-0 mb-0 text-center">
              we are happy to serve you <b>quality product</b>
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logowrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={Logo} alt="logo" className="img-fluid" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                {context.countryList.length !== 0 && <CountryDrop />}

                {/* Header search bar start here */}

                <SearchBox />

                {/* Header search bar end here */}

                <div className="part3 d-flex align-items-center ml-auto">
                  {context.isLogin === true ? (
                    <>
                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          
                          <Tooltip title="Account settings">
                            <IconButton
                              onClick={handleClick}
                              size="small"
                              sx={{ ml: 2 }}
                              aria-controls={open ? "account-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                            >
                              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          slotProps={{
                            paper: {
                              elevation: 0,
                              sx: {
                                overflow: "visible",
                                filter:
                                  "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Avatar /> My account
                          </MenuItem>
                          <Divider />
                         
                          <MenuItem onClick={handleClose}>
                          <FaCheckCircle className="mr-2 text-xl"/> My Orders
                          </MenuItem>
                          <Divider />
                         
                          <MenuItem onClick={handleClose}>
                          <FaClipboardList className="mr-2 text-xl"/> My Lists
                          </MenuItem>
                          <Divider />
                         
                          <MenuItem onClick={logout}>
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    </>
                  ) : (
                    <Link to="/signin">
                      <button className="bg-sky-500 m-2 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                        {" "}
                        SignIn{" "}
                      </button>
                    </Link>
                  )}

                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle ml-2">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>
      {/* <Home /> */}
    </>
  );
};

export default Header;
