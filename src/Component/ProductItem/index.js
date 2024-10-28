import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import Button from "@mui/material/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from "../ProductModal";
import { useState } from "react";

const ProductItem = () => {
  const [isOpenProuctModal, setIsOpenProductModal] = useState(false);

  const viewProductDetails = () => setIsOpenProductModal(true);

  const closeProductModal = () => setIsOpenProductModal(false);
  return (
  <>
      <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
            alt=""
            className="w-100"
          />
  
          <spna className="badge badge-primary">28%</spna>
          <div className="actions">
            <Button onClick={() =>viewProductDetails(1)}>
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

      {isOpenProuctModal && <ProductModal closeProductModal={closeProductModal}/>}

      {/* <ProductModal /> */}
  </>
  );
};

export default ProductItem;
