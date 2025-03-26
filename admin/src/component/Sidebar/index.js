import { MdCategory } from "react-icons/md";
import { motion } from "framer-motion";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

import { BsCartCheckFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useContext, useState , useEffect} from "react";
import { myContext } from "../../App";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(false);
  const navigate = useNavigate()

  const context = useContext(myContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const hoverAnimation = {
    scale: 1.02,
    rotate: 2,
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const isOpenSubMenu = (index) => {
    if (index === activeTab && isActiveTab) {
      setActiveTab(0);
      setIsActiveTab(false);
    } else {
      setActiveTab(index);
      setIsActiveTab(true);
    }
  };

  const redirect = ()=>{
    navigate("/login")
  }

    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token !== null && token !== "" &&   token !== undefined) {
        return;
      }else{

        redirect()
  
      }
    }, []);
  return (
    <div className="sidebar" id="sidebar1">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li 
          variants={itemVariants}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.98 }}
        >   
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
        </motion.li>
        <motion.li 
          variants={itemVariants}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.98 }}
        >
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
            <motion.ul 
              className="submenu"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/product">Prroduct list</Link>
              </motion.li>
              {/* <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/product/details">Prroduct view</Link>
              </motion.li> */}
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/product/upload">Prroduct upload</Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/product/RAMupload">Prroduct RAM upload</Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/product/WEIGHTupload">Prroduct WEIGHT upload</Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/product/SIZEupload">Prroduct SIZE upload</Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.li>




        <motion.li 
          variants={itemVariants}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className={`w-100 ${activeTab === 6 && isActiveTab ? "active" : ""}`}
            onClick={() => isOpenSubMenu(6)}
          >
            <span className="icon">
              <MdCategory />
            </span>
            Category
            <span className="arrow">
              <IoIosArrowForward />
            </span>
          </Button>
          <div
            className={`submenuWrapper ${
              activeTab === 6 ? "collapsed" : "collapse"
            }`}
          >
            <motion.ul 
              className="submenu"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/Category/list">Category list</Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/Category/add">Category upload</Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/subCategory/add">Sub Category upload</Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/subCategory/list">Sub Category list</Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.li>



        <motion.li 
          variants={itemVariants}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/orders">
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
        </motion.li>
        <motion.li 
          variants={itemVariants}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.98 }}
        >
       
        </motion.li>
        <motion.li 
          variants={itemVariants}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/login">
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
        </motion.li>
        <motion.li 
          variants={itemVariants}
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/signup">
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
        </motion.li>
      </motion.ul>

      <motion.div
       variants={boxVariants}
       initial="hidden"
       animate="visible"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
      className="logoutWrapper">
        <div className="logout bg-sky-400 w-100  border-3 border-r-slate-800 rounded-xl">
          <Button>Logout <RiLogoutBoxFill /> </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
