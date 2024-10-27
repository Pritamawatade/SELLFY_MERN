import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const HomeCat = () => {
  return (
    <section className="HomeCat">
      <div className="container">
        <h3 className="hd mb-4">FEATURED CATAGORIES</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          navigation={true}
          slidesPerGroup={1}
        
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
