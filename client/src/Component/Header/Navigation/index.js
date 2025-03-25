import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { mycontext } from "../../../App";


const Navigation = () => {
  const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);
  const context = useContext(mycontext);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button className="allCatTab align-items-center" onClick={()=> setisOpenSidebarVal(!isOpenSidebarVal)}>
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                <ul>

               {
                 context?.categories?.length > 0 && context?.categories?.map((category, index) => (
                    // <li key={category._id}>
                    //   <Link to={`/category/${category._id}`}>
                    //     {category.name}
                    //     <FaAngleRight />
                    //   </Link>
                    // </li>

                  <li key={category._id}>
                  <Link to="/">
                    <Button>{category.name}
                      <FaAngleRight className="ml-auto" />
                    </Button>

                  </Link>
                  </li>
                  ))
               }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
            <li className="list-inline-item">
                
                <Link to="/">
                  <Button>Home</Button>
                </Link>
               
              </li>
              <li className="list-inline-item">
              <Link to="/about">
                  <Button>About</Button>
                </Link>
              </li>
            {
                 context?.subcategories?.length > 0 && context?.subcategories?.map((category, index) => (
                    // <li key={category._id}>
                    //   <Link to={`/category/${category._id}`}>
                    //     {category.name}
                    //     <FaAngleRight />
                    //   </Link>
                    // </li>

                    <li key={index} className="list-inline-item">
                
                    <Link to={`/subCat/${category._id}`}>
                      <Button>{category.subCategory}</Button>
                    </Link>
                  </li>
                  ))
               }

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
