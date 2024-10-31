import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {  useContext, useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

// import "react-inner-image-zoom/lib/InnerImageZoom/style.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox/QuantityBox";
import { mycontext } from "../../App";


const ProductModal = () => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  const context = useContext(mycontext);

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

 
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
            <div className="productZoom">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={false}
                slidesPerGroup={1}
                modules={[Navigation]}

                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1.5}
                      src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg`}
                    />
                  </div>
                </SwiperSlide>
               <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1.5}
                      src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`}
                    />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1.5}
                      src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg`}
                    />
                  </div>
               </SwiperSlide>
              </Swiper>
            </div>
            <Swiper 
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            slidesPerGroup={1}
            modules={[Navigation]}
            className="zoomSlider" ref={zoomSlider}>
              <SwiperSlide>
                <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                    alt=""
                    className="w-100"
                    onClick={() => goto(0)}
                  />
                </div>
              </SwiperSlide>
             
              <SwiperSlide>
                <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg
"
                    alt=""
                    className="w-100"
                    onClick={() => goto(1)}
                  />
                </div>
              </SwiperSlide>
             
              <SwiperSlide>
                <div className={`item ${slideIndex === 2 && 'item_active'}`}>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                    alt=""
                    className="w-100"
                    onClick={() => goto(2)}
                  />
                </div>
              </SwiperSlide>
             
            </Swiper>
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
