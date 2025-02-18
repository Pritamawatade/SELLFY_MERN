import React, { useContext } from 'react';
import { mycontext } from "../../App";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductItem = (props) => {
  const context = useContext(mycontext);

  const viewProductDetails = (id) => {
    console.log("viewProductDetails", id);
    context.setIsOpenProductModal({
      id: id,
      isOpen: true,
    });
  };

  const closeProductModal = () => {
    context.setIsOpenProductModal(false);
  };

  const discount = ((props?.product?.oldPrice - props?.product?.price) / props?.product?.oldPrice * 100).toFixed(0);
//  <div className={`item  productItem ${props?.itemView || ""}`}>
  return (
    <div className={`group item relative productItem rounded-lg ${props?.itemView || ""} bg-white shadow-sm transition-all duration-300 hover:shadow-xl`}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-100">
        <img
          src={props?.product?.images[0]}
          alt={props?.product?.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectFit: 'cover' }}
        />
        
        {/* Discount Badge */}
        <div className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          {discount}% OFF
        </div>

        {/* Action Buttons */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="contained"
            size="small"

            style={{
              minWidth: '32px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              padding: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#333',
            }}
            onClick={() => viewProductDetails(props?.product?._id)}
          >
            <SlSizeFullscreen size={16} />
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              minWidth: '32px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              padding: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#333',
            }}
          >
            <IoIosHeartEmpty size={16} />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium line-clamp-2" style={{ minHeight: '40px' }}>
            {props?.product?.name}
          </h3>
          
          {/* Stock Status */}
          <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            In Stock
          </span>

          {/* Rating */}
          <div className="flex items-center">
            <Rating
              name="read-only"
              value={props?.product?.rating || 3}
              readOnly
              size="small"
              precision={0.5}
            />
          </div>

          {/* Price */}
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-sm text-gray-500 line-through">
              ${props?.product?.oldPrice}
            </span>
            <span className="text-lg font-bold text-red-600">
              ${props?.product?.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;