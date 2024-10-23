import React from "react";
import Slider from "react-slick";
const HomeBanner = () => {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
        <div className="homeBannerSection">
            <Slider {...settings}>
            <div className="item1">
                <img src="https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
                <img src="https://www.beyoung.in/mobile/images/locations/Plain-tshirt-mobile-view.jpg" alt="" className="w-100" />
            </div>
            <div className="item">
                <img src="https://www.beyoung.in/mobile/images/locations/Plain-tshirt-mobile-view.jpg" alt="" className="w-100" />
            </div>
            
           
        
            </Slider>
        </div>
      </>
    )
}

export default HomeBanner