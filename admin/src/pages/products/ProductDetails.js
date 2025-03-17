import { IoIosPricetags } from "react-icons/io";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";
import { BiSolidCategory } from "react-icons/bi";

import "swiper/css";
import { IoIosColorPalette } from "react-icons/io";

import { IoIosSettings } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { TbCategory2 } from "react-icons/tb";

import { TbBrandSnowflake } from "react-icons/tb";

import { TbBrandAmigo } from "react-icons/tb";

import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useParams } from "react-router-dom";
import { fetchdatafromapi } from "../../utils/api";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [product, setProducts] = useState([]);
  const [reviews, setReviews] = useState();
  const isActive = (size) => {
    setActiveSize(size);
  };

  const { id } = useParams();
  useEffect(() => {
    fetchdatafromapi(`/api/products/${id}`).then((res) => {
      setProducts(res);
      console.log(res);
    });
    
    fetchdatafromapi(`/api/reviews/${id}`).then((res) => {
      setReviews(res);
      console.log(res);
    });

  }, []);
  return (
    <div className="right-content w-100">
      <div className=" p-12">
        <div className="header bg-olive-600 border rounded-xl p-3">
          <h4>Product View</h4>
        </div>
      </div>

      {
      product != undefined && (
        <div className="card">
          <div className="row">
            <div className="col-md-5">
              <h4 className="mb-3 mt-3 pl-2">Product Gallery</h4>

              <div className="siperWrapper py-3 pl-2 overflow-x-auto">
                <Swiper
                  // key={i}
                  spaceBetween={0}
                  navigation={true}
                  modules={[Navigation]}
                  slidesPerView={1}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  {product?.images?.length > 0 &&
                    product?.images?.map((image, i) => {
                      return (
                        <SwiperSlide>
                          <img src={image} alt="" />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-7">
              <div className="rightContent py-3 pl-2">
                <h4>Product Details</h4>
                <h4 className="p-2 mt-2 ">{product.name}</h4>

                <div className="row mt-4">
                  <div className="col-sm-5">
                    <div className="flex align-items-center">
                      <span className="icon mr-2">
                        <TbBrandSnowflake />
                      </span>
                      <span className="brands">Brand</span>
                    </div>
                  </div>
                  <div className="col-sm-1 colon-center">:</div>
                  <div className="col-sm-6">
                    <div className="brand-name">
                      <span className="text-sm-font-normal text-gray-300">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-5">
                    <div className="flex align-items-center">
                      <span className="icon mr-2">
                        <TbCategory2 />
                      </span>
                      <span className="brands">Category</span>
                    </div>
                  </div>
                  <div className="col-sm-1 colon-center">:</div>
                  <div className="col-sm-6">
                    <div className="brand-name">
                      <span className="text-sm-font-normal text-gray-300">
                        {product.catName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                <div className="col-sm-5">
                  <div className="flex align-items-center">
                    <span className="icon mr-2">
                      <BiSolidCategory />
                    </span>
                    <span className="brands">sub Category</span>
                  </div>
                </div>
                <div className="col-sm-1 colon-center">:</div>
                <div className="col-sm-6">
                  <div className="brand-name">
                    <span className="text-sm-font-normal text-gray-300">
                      {product?.subCategory?.subCategory}
                    </span>
                  </div>
                </div>
              </div>

                <div className="row mt-4">
                  <div className="col-sm-5">
                    <div className="flex align-items-center">
                      <span className="icon mr-2">
                        <IoIosSettings />
                      </span>
                      <span className="brands">Tags</span>
                    </div>
                  </div>
                  <div className="col-sm-1 colon-center">:</div>
                  <div className="col-sm-6">
                    <div className="brand-name">
                      <span className="text-sm-font-normal text-gray-300">
                        {product.catName}
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className="row mt-4">
                <div className="col-sm-5">
                  <div className="flex align-items-center">
                    <span className="icon mr-2">
                      <IoIosColorPalette />
                    </span>
                    <span className="brands">color</span>
                  </div>
                </div>
                <div className="col-sm-1 colon-center">:</div>
                <div className="col-sm-6">
                  <div className="brand-name">
                    <span className="text-sm-font-normal text-gray-300">
                      
                    </span>
                  </div>
                </div>
              </div> */}

               

                <div className="row mt-4">
                  <div className="col-sm-5">
                    <div className="flex align-items-center">
                      <span className="icon mr-2">
                        <IoIosPricetags />
                      </span>
                      <span className="brands">Price</span>
                    </div>
                  </div>
                  <div className="col-sm-1 colon-center">:</div>
                  <div className="col-sm-6">
                    <div className="brand-name">
                      <span className="text-sm-font-normal text-gray-300">
                        ₹{product.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-5">
                    <div className="flex align-items-center">
                      <span className="icon mr-2">
                        <MdOutlineProductionQuantityLimits />
                      </span>
                      <span className="brands">Stock</span>
                    </div>
                  </div>
                  <div className="col-sm-1 colon-center">:</div>
                  <div className="col-sm-6">
                    <div className="brand-name">
                      <span className="text-sm-font-normal text-gray-300">
                        {product.countInStock}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card mt-5 p-5 detailsPageTabs bg-red-600">
        <div className="customTabs ">
          <ul className="list list-inline">
            <li className="list-inline-item">
              <Button onClick={() => setActiveTab(0)}>Description</Button>
            </li>
            <li className="list-inline-item">
              <Button onClick={() => setActiveTab(1)}>Aditional Info</Button>
            </li>
            <li className="list-inline-item">
              <Button onClick={() => setActiveTab(2)}>Review ({reviews?.length})</Button>
            </li>
          </ul>

          {activeTab === 0 && (
            <div className="tabContent">
              <p>{
                product.description
                }</p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="tabContent">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr className="stand-up">
                      <th>Stand Up</th>
                      <td>
                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                      </td>
                    </tr>
                    <tr className="folded-wo-wheels">
                      <th>Folded (w/o wheels)</th>
                      <td>
                        <p>32.5″L x 18.5″W x 16.5″H</p>
                      </td>
                    </tr>
                    <tr className="folded-w-wheels">
                      <th>Folded (w/ wheels)</th>
                      <td>
                        <p>32.5″L x 24″W x 18.5″H</p>
                      </td>
                    </tr>
                    <tr className="door-pass-through">
                      <th>Door Pass Through</th>
                      <td>
                        <p>24</p>
                      </td>
                    </tr>
                    <tr className="frame">
                      <th>Frame</th>
                      <td>
                        <p>Aluminum</p>
                      </td>
                    </tr>
                    <tr className="weight-wo-wheels">
                      <th>Weight (w/o wheels)</th>
                      <td>
                        <p>20 LBS</p>
                      </td>
                    </tr>
                    <tr className="weight-capacity">
                      <th>Weight Capacity</th>
                      <td>
                        <p>60 LBS</p>
                      </td>
                    </tr>
                    <tr className="width">
                      <th>Width</th>
                      <td>
                        <p>24″</p>
                      </td>
                    </tr>
                    <tr className="handle-height-ground-to-handle">
                      <th>Handle height (ground to handle)</th>
                      <td>
                        <p>37-45″</p>
                      </td>
                    </tr>
                    <tr className="wheels">
                      <th>Wheels</th>
                      <td>
                        <p>12″ air / wide track slick tread</p>
                      </td>
                    </tr>
                    <tr className="seat-back-height">
                      <th>Seat back height</th>
                      <td>
                        <p>21.5″</p>
                      </td>
                    </tr>
                    <tr className="head-room-inside-canopy">
                      <th>Head room (inside canopy)</th>
                      <td>
                        <p>25″</p>
                      </td>
                    </tr>
                    <tr className="pa_color">
                      <th>Color</th>
                      <td>
                        <p>Black, Blue, Red, White</p>
                      </td>
                    </tr>
                    <tr className="pa_size">
                      <th>Size</th>
                      <td>
                        <p>M, S</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="tabContent">
              <div className="row">
                <div className="col-md-8">
                  <h3>Customer reviews</h3>
                  <br />
             {
              reviews?.length != 0 && reviews.map((review, index)=>(
                <div className="card p-4 reviewsCard flex flex-row items-start gap-4 bg-white shadow-lg rounded-lg border border-gray-200">
                {/* Avatar and Customer Name */}
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-slate-500 h-14 w-14 flex items-center justify-center shadow-md">
                    <span className="text-white text-2xl font-bold">
                      {review?.customerName?.at(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-semibold capitalize text-lg mt-2 text-gray-800">
                    {review.customerName}
                  </span>
                </div>
              
                {/* Review Info */}
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {/* Date */}
                    <p className="text-slate-500 text-sm">
                      {review?.updatedAt
                        ? new Date(review.updatedAt).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true,
                          })
                        : 'No date available'}
                    </p>
              
                    {/* Rating */}
                    <div className="ml-auto">
                      <Rating
                        size="small"
                        name="read-only"
                        value={review.customerRating}
                        readOnly
                        className="scale-110"
                      />
                    </div>
                  </div>
              
                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed dark:bg-gray-900 dark:text-white -light:bg-gray-50 p-3 rounded-md border border-gray-300 shadow-sm">
                    {review.review}
                  </p>
                </div>
              </div>
              
              ))
             }


                </div>
                {/* <div className="col-md-4 mb-4 reviewSection">
                  <div className="flex items-center content-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      readOnly
                      precision={0.5}
                      size="small"
                      className=""
                    />
                    <h4 className="capitalize text-lg ml-2">
                      Customor Reiview
                    </h4>
                  </div>
                  <div className="progress d-flex align-items-center mb-4">
                    <span className="mr-3 text-lg  font-normal bg-white">
                      5 Star
                    </span>
                    <div className="progress w-3/4">
                      <div style={{ width: "75%" }} className="progress-bar">
                        75%
                      </div>
                    </div>
                  </div>

                  <div className="progress d-flex align-items-center mb-4">
                    <span className="mr-3 text-lg  font-normal bg-white">
                      4 Star
                    </span>
                    <div className="progress w-3/4">
                      <div style={{ width: "60%" }} className="progress-bar">
                        60%
                      </div>
                    </div>
                  </div>

                  <div className="progress d-flex align-items-center mb-4">
                    <span className="mr-3 text-lg  font-normal bg-white">
                      3 Star
                    </span>
                    <div className="progress w-3/4">
                      <div style={{ width: "50%" }} className="progress-bar">
                        50%
                      </div>
                    </div>
                  </div>

                  <div className="progress d-flex align-items-center">
                    <span className="mr-3 text-lg  font-normal bg-white">
                      2 Star
                    </span>
                    <div className="progress w-3/4">
                      <div style={{ width: "35%" }} className="progress-bar ">
                        35%
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
