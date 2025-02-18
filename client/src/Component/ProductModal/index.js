import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox/QuantityBox";
import { mycontext } from "../../App";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
  const context = useContext(mycontext);

  return (
    <Dialog
      open={context.isOpenProuctModal}
      onClose={() => context.setIsOpenProductModal(false)}
      maxWidth="lg"
      className="relative"
      PaperProps={{
        style: {
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '1000px',
          width: '95%'
        }
      }}
    >
      {/* Close Button */}
      <Button
        onClick={() => context.setIsOpenProductModal(false)}
        style={{
          position: 'absolute',
          right: '16px',
          top: '16px',
          minWidth: '40px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#f3f4f6',
          color: '#374151',
          zIndex: 10
        }}
      >
        <IoCloseSharp size={20} />
      </Button>

      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{props?.data?.name}</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center text-gray-600">
            <span className="font-medium">Brand:</span>
            <span className="ml-2">{props?.data?.brand}</span>
          </div>
          <Rating
            name="read-only"
            value={props?.data?.rating}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Product Images */}
        <div className="relative w-full">
          <ProductZoom images={props?.data?.images}/>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          {/* Price Section */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-red-600">
              ₹{props?.data?.price}
            </span>
            <span className="text-xl text-gray-400 line-through">
              ₹{props?.data?.oldPrice}
            </span>
          </div>

          {/* Stock Status */}
          <div className="inline-block">
            <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
              IN STOCK
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {props?.data?.description}
          </p>

          {/* Add to Cart Section */}
          <div className="flex items-center gap-4">
            <QuantityBox />
            <Button
              variant="contained"
              style={{
                backgroundColor: '#1a73e8',
                color: 'white',
                padding: '10px 24px',
                textTransform: 'none',
                fontWeight: 500
              }}
            >
              Add to Cart
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <Button
              variant="outlined"
              style={{
                borderRadius: '25px',
                padding: '8px 20px',
                textTransform: 'none'
              }}
              startIcon={<CiHeart size={20} />}
            >
              Add to Wishlist
            </Button>
            <Button
              variant="outlined"
              style={{
                borderRadius: '25px',
                padding: '8px 20px',
                textTransform: 'none'
              }}
              startIcon={<MdOutlineCompareArrows size={20} />}
            >
              Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;