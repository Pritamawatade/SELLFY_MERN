import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/pagination";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {  useContext, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

// import "react-inner-image-zoom/lib/InnerImageZoom/style.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox/QuantityBox";
import { mycontext } from "../../App";
import ProductZoom from "../ProductZoom";


const ProductModal = () => {
 
  const context = useContext(mycontext);

 
  return (
    <>
      <Dialog
        className="productModal"
        open={context.isOpenProuctModal}
        onClose={() => context.setIsOpenProductModal(false)}
      >
        <Button className="close_">
          <IoCloseSharp onClick={() => context.setIsOpenProductModal(false)} />
        </Button>
        <h4 className="mb-1">All Natural Italian-Style Chicken Meatballs</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands: </span>
            <span className="ml-2">Welch's</span>
          </div>

          <Rating
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
          <ProductZoom />

          </div>
          <div className="col-md-7">
            <div className="d-flex info align-item-center">
              <span className="oldPrice">$9.35</span>
              <span className="netPrice text-danger bolder mb-3">$7.35</span>
            </div>
            <span className="bg-green-100 text-green-600 p-1 px-1 mt-9 border-3 rounded-full text-sm block">
              IN STOCK
            </span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="d-flex align-items-center mt-3">
              <QuantityBox />

              <Button
                style={{ color: "#fff" }}
                className="add-to-cart ml-3 text-white text-sm"
              >
                Add to cart
              </Button>
            </div>
            <div className="actions d-flex align-item-center mt-9">
              <Button variant="outlined" className="btn-round ">
                <CiHeart /> Add to Wishlist
              </Button>
              <Button variant="outlined" className="btn-round ml-3">
                <MdOutlineCompareArrows /> Compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
