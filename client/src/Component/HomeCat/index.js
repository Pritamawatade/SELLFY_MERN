import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const HomeCat = (props) => {
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

         {
          
           props.categories.length > 0 && props.categories.map((category, index) => (
            <SwiperSlide >
            <div className="item text-center" key={category._id} style={{ "background": category.color}} >
                <img src={category.image} alt="" />
                <h6>{category.name}</h6>
            </div>
          </SwiperSlide>
           ))

         }
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
