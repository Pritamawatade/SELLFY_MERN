import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import { useRef, useState } from "react";

const ProductZoom = (props) => {

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
                {
                  props?.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <InnerImageZoom
                          zoomType="hover"
                          zoomScale={2}
                          src={image}
                        />
                      </div>
                    </SwiperSlide>
                  ))
                }
              
              </Swiper>
            </div>
            <Swiper 
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            slidesPerGroup={1}
            modules={[Navigation]}
            className="zoomSlider" ref={zoomSlider}>

              {
                props?.images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className={`item ${slideIndex === index && 'item_active'}`}>
                      <img src={image} alt="" className="w-100" onClick={() => goto(index)} />
                    </div>
                  </SwiperSlide>
                ))
              }
              
           
             
            </Swiper>

        </div>
    )
}

export default ProductZoom