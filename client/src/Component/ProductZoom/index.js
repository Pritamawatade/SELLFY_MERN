import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import { useRef, useState } from "react";

const ProductZoom = () => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const [slideIndex, setSlideIndex] = useState(0);
    
  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

    return(
        <div className="productZoom">
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
                      zoomScale={9}
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
                      src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`}
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
    )
}

export default ProductZoom