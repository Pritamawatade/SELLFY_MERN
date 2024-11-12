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


const Sidebar = () => {
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
          <Link to="/">
            <Button className="dashboard w-100">
              <span className="icon">
                <FaProductHunt />
              </span>
              Product
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
            <Button className="dashboard w-100">
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
            <Button className="dashboard w-100">
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
            <Button className="dashboard w-100">
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
        <li>
          <Link to="/">
            <Button className="dashboard w-100">
              <span className="icon">
                <RiDashboardHorizontalLine />
              </span>
              Dashboard
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
                <RiDashboardHorizontalLine />
              </span>
              Dashboard
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
                <RiDashboardHorizontalLine />
              </span>
              Dashboard
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
