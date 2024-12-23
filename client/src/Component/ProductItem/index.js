import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import Button from "@mui/material/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { mycontext } from "../../App";

const ProductItem = (props) => {
  const context = useContext(mycontext);
  const viewProductDetails = () => {
    context.setIsOpenProductModal(true);
  };

  const closeProductModal = () => {
    context.setIsOpenProductModal(false);
  };
  return (
    <>
      <div className={`item  productItem ${props?.itemView || ""}`}>
        <div
          className="imgWrapper"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            aspectRatio: "4 / 3", // Maintain a fixed aspect ratio
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f8f8", // Optional: A placeholder background
          }}
        >
          <img
            src={props?.product?.images[0]}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <span
            className="badge badge-primary"
            style={{ position: "absolute", top: "10px", left: "10px" }}
          >
            {props?.product?.discount || 23}%
          </span>
          <div
            className="actions"
            style={{ position: "absolute", bottom: "10px", right: "10px" }}
          > 
            <Button onClick={() => viewProductDetails()}>
              <SlSizeFullscreen />
            </Button>
            <Button>
              <IoIosHeartEmpty />
            </Button>
          </div>
        </div>

        <div
          className="info"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <h4>
            {props?.product?.name.length > 10
              ? `${props?.product?.name.substring(0, 40)}...`
              : props?.product?.name}
          </h4>
          <span className="text-success d-block">IN STOCK</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={props?.product?.rating || 3}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex justify-content-between align-items-center">
            <span className="oldPrice">${props?.product?.oldPrice}</span>
            <span className="netPrice text-danger">
              ${props?.product?.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
