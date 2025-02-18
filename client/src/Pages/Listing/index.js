import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";

import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Menu, MenuItem } from "@mui/material";

import Sidebar from "../../Component/Sidebar";
import { Link } from "react-router-dom";
import rightbanner from "../../assets/images/rightbanner.png";
import ProductItem from "../../Component/ProductItem";
import Pagination from '@mui/material/Pagination';
import { useParams } from "react-router-dom";
import { fetchdatafromapi } from "../../utils/api";


function Listing() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productView, setProductView] = React.useState("four");
  const [productData, setProductData] = useState([]);
  const open = Boolean(anchorEl);
  const {id} = useParams();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    fetchdatafromapi(`/api/products?subCatId=${id}`).then((res) => {
      console.log(res);
      setProductData(res.products);
    })
  },[id])
  return (
    <>
      <section className="product_listing_page">
        <div className="container">
          <div className="product_listing d-flex">
            <Sidebar />

            <div className="content_right">
              <Link to="/productdetail">
                {" "}
                <img src={rightbanner} alt="" />{" "}
              </Link>
              <div className="showBy d-flex align-items-center mt3 mb3">
                <div className="d-flex btnWrapper">
                  <Button className={productView === "one" && "active" } onClick={() => setProductView("one")}>
                    <AiOutlineMenu />
                  </Button>
                  <Button className={productView === "two" && "active" } onClick={() => setProductView("two")}>
                    <BsFillGridFill />
                  </Button>
                  <Button className={productView === "three" && "active" } onClick={() => setProductView("three")}>
                    <TbGridDots />
                  </Button>
                  <Button className={productView === "four" && "active" } onClick={() => setProductView("four")}>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button
                  className="text-slate-500"
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    
                    Show <span className="ml-1 text-black">9 </span>&nbsp; <FaAngleDown className="ml-auto"/>
                  </Button>
                  <Menu
                    className="showPerPageDropdown mt-2"
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
                  <ProductItem itemView={productView} />
              </div>

                  <div className="d-flex align-items-center justify-center  mt-5">
                  <Pagination count={10} color="primary"  size="large"/>
                  </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Listing;
