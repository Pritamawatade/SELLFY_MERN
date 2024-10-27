import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../assets/images/slider-1.png";
import slider2 from "../../../assets/images/slider-2.png";
const HomeBanner = () => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }
    return (
        <>
        <div className="homeBannerSection">
            <Slider {...settings}>
            <div className="item1">
                <img src={slider1} alt="" className="w-100" />
            </div>
            <div className="item">
                <img src={slider2} alt="" className="w-100" />
            </div>
            
            </Slider>
        </div>
      </>
    )
}

export default HomeBanner