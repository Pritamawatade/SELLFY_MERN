import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import Button from "@mui/material/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext, useState } from "react";
import { mycontext } from "../../App";

const ProductItem = (props) => {

  const context = useContext(mycontext);
  const viewProductDetails = () => {
    context.setIsOpenProductModal(true);
  }


  const closeProductModal = () => {
    context.setIsOpenProductModal(false);
  }
  return (
  <>
      <div className={`item  productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
            alt=""
            className="w-100"
          />
  
          <spna className="badge badge-primary">28%</spna>
          <div className="actions">
            <Button onClick={() =>viewProductDetails()}>
              <SlSizeFullscreen />
            </Button>
            <Button>
              <IoIosHeartEmpty />
            </Button>
          </div>
        </div>
  
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">IN STOCK</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$15.00</span>
            <span className="netPrice text-danger">$10.00</span>
          </div>
        </div>
      </div>

    

      {/* <ProductModal /> */}
  </>
  );
};

export default ProductItem;
