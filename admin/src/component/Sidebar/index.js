import { RiLogoutBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { BsCartCheckFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(false);

  const isOpenSubMenu = (index) => {
    if (index === activeTab && isActiveTab) {
      setActiveTab(0);
      setIsActiveTab(false);
    }
    else{setActiveTab(index);
      setIsActiveTab(true);}
  };
  return (
    <div className="sidebar" id="sidebar1">
      <ul>
        <li>
          <Link to="/">
            <Button className="dashboard w-100">
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Button
            className={`w-100 ${activeTab === 1 && isActiveTab ? "active" : ""}`}
            onClick={() => isOpenSubMenu(1)}
          >
            <span className="icon">
              <FaProductHunt />
            </span>
            Product
            <span className="arrow">
              <IoIosArrowForward />
            </span>
          </Button>
          <div
            className={`submenuWrapper ${
              activeTab === 1 ? "collapsed" : "collapse"
            }`}
          >
            <ul className="submenu">
              <li>
                <Link to="/">Prroduct list</Link>
              </li>
              <li>
                <Link to="/">Prroduct view</Link>
              </li>
              <li>
                <Link to="/">Prroduct upload</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">
          <Button
            className={`w-100 ${activeTab === 2 && isActiveTab ? "active" : ""}`}
            onClick={() => isOpenSubMenu(2)}
          >
              <span className="icon">
                <BsCartCheckFill />
              </span>
              Orders
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button
            className={`w-100 ${activeTab === 3 && isActiveTab ? "active" : ""}`}
            onClick={() => isOpenSubMenu(3)}
          >
              <span className="icon">
                <RiMessage2Fill />
              </span>
              Message
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button
            className={`w-100 ${activeTab === 4 && isActiveTab ? "active" : ""}`}
            onClick={() => isOpenSubMenu(4)}
          >
              <span className="icon">
                <MdNotificationAdd />
              </span>
              Notifications
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button
            className={`w-100 ${activeTab === 5 && isActiveTab ? "active" : ""}`}
            onClick={() => isOpenSubMenu(5)}
          >
              <span className="icon">
                <IoSettings />
              </span>
              Setting
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className="dashboard w-100">
              <span className="icon">
                <IoIosLogIn />
              </span>
              Log in
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className="dashboard w-100">
              <span className="icon">
                <FaUserPlus />
              </span>
              Sign up
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
      </ul>

      <div className="logoutWrapper ">
        <div className="logout bg-sky-400 w-100">
          <Button>Logout <RiLogoutBoxFill /> </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
