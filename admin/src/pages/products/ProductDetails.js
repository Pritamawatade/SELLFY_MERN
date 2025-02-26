import { IoIosPricetags } from "react-icons/io";
import { useState } from "react";
import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
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

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const isActive = (size) => {
    setActiveSize(size);
  };
  return (
    <div className="right-content w-100">
      <div className=" p-12">
        <div className="header bg-olive-600 border rounded-xl p-3">
          <h4>Product View</h4>
        </div>
      </div>

      <div className="card">
        <div className="row">
          <div className="col-md-5">
            <h4 className="mb-3 mt-3 pl-2">Product Gallery</h4>

            <div className="siperWrapper py-3 pl-2">
              <Swiper
                spaceBetween={50}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-md-7">
            <div className="rightContent py-3 pl-2">
              <h4>Product Details</h4>
              <h4 className="p-2 mt-2 ">
                Formal suits for men wedding slim fit 3 piece dress business
                party jacket
              </h4>

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
                      Ecasty
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
                      Men's
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
                      Former
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
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
                      RED
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-5">
                  <div className="flex align-items-center">
                    <span className="icon mr-2">
                      <SlSizeFullscreen />
                    </span>
                    <span className="brands">size</span>
                  </div>
                </div>
                <div className="col-sm-1 colon-center">:</div>
                <div className="col-sm-6">
                  <div className="brand-name">
                    <span className="text-sm-font-normal text-gray-300">
                      M, &nbsp; L &nbsp; XL
                    </span>
                  </div>
                </div>
              </div>

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
                      $100
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
                      (73) pieces
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <Button onClick={() => setActiveTab(2)}>Review (3)</Button>
            </li>
          </ul>

          {activeTab === 0 && (
            <div className="tabContent">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                pariatur temporibus aut neque itaque expedita sint ducimus,
                asperiores blanditiis, cupiditate harum. Iure deserunt, odio
                dolorem non facere cum nulla, est quisquam dignissimos
                repudiandae impedit ex quas esse quis suscipit excepturi
                consequatur quos doloribus rem eligendi quibusdam cupiditate
                possimus! Autem quaerat in hic porro distinctio modi, obcaecati
                dignissimos cumque sunt exercitationem quibusdam inventore ea
                amet ad iusto corporis! Laboriosam expedita cupiditate amet
                dolor mollitia iusto illum a optio ullam, odio voluptatibus qui
                modi odit laudantium natus aspernatur, quis earum repellendus
                neque sapiente fugit vel soluta consectetur! Et molestiae id
                nobis voluptate?
              </p>
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
                  <h3>Customer questions & answder</h3>
                  <br />
                  <div className="card p-3 reviewsCard flex-row">
                    <div className="image">
                      <div className="rounded-circle">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                          alt=""
                        />
                      </div>
                      <span className="font-bold capitalize text-lg">
                        ollena
                      </span>
                    </div>
                    <div className="info">
                      <div className="flex items-center">
                        <p className="text-slate-500 text-sm ">
                          Date 2 Nov 2024 at 07:05 PM
                        </p>
                        <div className="ml-auto">
                          <Rating
                            size="small"
                            name="read-only"
                            value={4}
                            readOnly
                          />
                        </div>
                      </div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis commodi unde labore dolorum perferendis
                        facere, dicta nihil iusto corrupti adipisci rerum nam
                        alias autem nesciunt laudantium dolore deleniti, dolorem
                        aperiam!
                      </p>
                    </div>
                  </div>

                  <div className="card p-3 reviewsCard flex-row">
                    <div className="image">
                      <div className="rounded-circle">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                          alt=""
                        />
                      </div>
                      <span className="font-bold capitalize text-lg">
                        ollena
                      </span>
                    </div>
                    <div className="info">
                      <div className="flex items-center">
                        <p className="text-slate-500 text-sm ">
                          Date 2 Nov 2024 at 07:05 PM
                        </p>
                        <div className="ml-auto">
                          <Rating
                            size="small"
                            name="read-only"
                            value={4}
                            readOnly
                          />
                        </div>
                      </div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis commodi unde labore dolorum perferendis
                        facere, dicta nihil iusto corrupti adipisci rerum nam
                        alias autem nesciunt laudantium dolore deleniti, dolorem
                        aperiam!
                      </p>
                    </div>
                  </div>

                  <div className="card p-3 reviewsCard flex-row">
                    <div className="image">
                      <div className="rounded-circle">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                          alt=""
                        />
                      </div>
                      <span className="font-bold capitalize text-lg">
                        ollena
                      </span>
                    </div>
                    <div className="info">
                      <div className="flex items-center">
                        <p className="text-slate-500 text-sm ">
                          Date 2 Nov 2024 at 07:05 PM
                        </p>
                        <div className="ml-auto">
                          <Rating
                            size="small"
                            name="read-only"
                            value={4}
                            readOnly
                          />
                        </div>
                      </div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis commodi unde labore dolorum perferendis
                        facere, dicta nihil iusto corrupti adipisci rerum nam
                        alias autem nesciunt laudantium dolore deleniti, dolorem
                        aperiam!
                      </p>
                    </div>
                  </div>

                  <div className="card p-3 reviewsCard flex-row">
                    <div className="image">
                      <div className="rounded-circle">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                          alt=""
                        />
                      </div>
                      <span className="font-bold capitalize text-lg">
                        ollena
                      </span>
                    </div>
                    <div className="info">
                      <div className="flex items-center">
                        <p className="text-slate-500 text-sm ">
                          Date 2 Nov 2024 at 07:05 PM
                        </p>
                        <div className="ml-auto">
                          <Rating
                            size="small"
                            name="read-only"
                            value={4}
                            readOnly
                          />
                        </div>
                      </div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis commodi unde labore dolorum perferendis
                        facere, dicta nihil iusto corrupti adipisci rerum nam
                        alias autem nesciunt laudantium dolore deleniti, dolorem
                        aperiam!
                      </p>
                    </div>
                  </div>

                  <br />
                  <br />

                  <form className="reviewForm">
                    <h4>Add a Review</h4>
                    <div className="form-group">
                      <textarea
                        name=""
                        placeholder="Write a review"
                        id=""
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Name"
                            name=""
                            className="form-control"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Email"
                            name=""
                            className="form-control"
                            id=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Website"
                        name=""
                        className="form-control"
                        id=""
                      />
                    </div>

                    <div className="form-group">
                      <Button className="bg-blue-300 text-black">
                        Submit Review
                      </Button>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 mb-4 reviewSection">
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
