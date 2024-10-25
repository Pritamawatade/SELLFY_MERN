import Button from "@mui/material/Button";
import HomeBanner from "../../Component/Header/HomeBanner/HomeBanner.js";
import banner1 from "../../assets/images/banner1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";

const Home = () => {
  var productsSliderOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner cursor w-100">
                {" "}
                <img
                  src={banner1}
                  alt=""
                  className="cursor w-100"
                />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light1 text-sml mb-0">Do not miss the current offer till this month end</p>
                </div>
                <Button className="ml-auto viewAllbtn">View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="product_row">
                <Slider {...productsSliderOptions}>
                  <div className="item">
                    {/* //TODO: video number 9 23 minute */}
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
