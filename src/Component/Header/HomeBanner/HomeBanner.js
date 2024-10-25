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
                <img src="https://i.pinimg.com/originals/f1/2f/28/f12f28f99b8bcba0441b67c5334bca1e.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fe213f37352801.573d3df297da5.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
                <img src="https://i.pinimg.com/originals/a1/5c/bc/a15cbc46ef421272a227accd9dca6a20.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
                <img src="https://img.pikbest.com/origin/06/63/98/19qpIkbEsTkzP.jpg!w700wp" alt="" className="w-100" />
            </div>
            
           
        
            </Slider>
        </div>
      </>
    )
}

export default HomeBanner