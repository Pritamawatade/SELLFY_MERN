import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "@mui/material/Button";
import ProductItem from "../../../Component/ProductItem";
import { Navigation } from "swiper/modules";


const RelatedProducts = (props) =>{
    return (
        <>  
           <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd mt-4">{props.title}</h3>
                  <p className="text-light1 text-sml mb-0">
                    Do not miss the current offer till this month end
                  </p>
                </div>
                <Button className="ml-auto viewAllbtn">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <div className="container">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                   {
                    props?.product?.length >=  0 && props?.product?.map((products, item) =>{
                      return (
                        <SwiperSlide key={item}>
                          <ProductItem product={products} view={props.view}/>
                        </SwiperSlide>
                      )
                    })
                   }

                  </Swiper>
                </div>
              </div>

        </>
    )
}





export default RelatedProducts;























































