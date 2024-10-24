import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeBanner = () => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <>
        <div className="homeBannerSection">
            <Slider {...settings}>
            <div className="item1">
                <img src="https://img.paisawapas.com/ovz3vew9pw/2022/06/03161046/ajio2-ep-deal-.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
                <img src="https://www.polagoclothing.com/cdn/shop/files/Cotton_Collection_2.jpg?v=1729652081&width=3000" alt="" className="w-100" />
            </div>
            <div className="item">
                <img src="https://maxzoneclothing.com/cdn/shop/files/max_web_banners_7_9033cec1-5bcd-431b-a811-472e88f17e6f.png?v=1729524305&width=3840" alt="" className="w-100" />
            </div>
            
           
        
            </Slider>
        </div>
      </>
    )
}

export default HomeBanner