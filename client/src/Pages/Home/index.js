import Button from "@mui/material/Button";

import HomeBanner from "../../Component/Header/HomeBanner/HomeBanner.js";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Component/ProductItem/index.js";
import HomeCat from "../../Component/HomeCat/index.js";
import coupon from "../../assets/images/coupon.jpg";
import { IoMailOutline } from "react-icons/io5";
import { fetchdatafromapi } from "../../utils/api.js";
import { mycontext } from "../../App.js";

const Home = () => {
  const context = useContext(mycontext);
  const [featuredProducts, setFeaturedProducts] = React.useState([]);
  const [newProducts, setNewProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const fetchcategories = async () => {
    const data = await fetchdatafromapi("/api/category/");
    setCategories(data);
  };
  const fetchProducts = async () => {
    const data = await fetchdatafromapi("/api/products/");
    console.log("data", data);

    setNewProducts(data);
  };

  useEffect(() => {
    fetchcategories();
    fetchdatafromapi(`/api/products/featured/`).then((res) => {
      setFeaturedProducts(res);
      fetchProducts();
    });
  }, []);
  useEffect(() => {
    context.setIsHeaderFooterShow(true);
  }, []);
  return (
    <>
      <HomeBanner />

      {/* // home catagory Component */}
      <HomeCat categories={categories} />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner cursor w-100">
                  <img src={banner1} alt="" className="cursor w-100" />
                </div>
                <div className="banner cursor w-100 mt-4  ">
                  <img src={banner2} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Featured Products</h3>
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
                    slidesPerView={4}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {featuredProducts.length > 0 &&
                      featuredProducts.map((product, index) => (
                        <SwiperSlide key={product._id}>
                          <ProductItem product={product} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light1 text-sml mb-0">
                    New products with updated stocks
                  </p>
                </div>
                <Button className="ml-auto viewAllbtn">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                {
                newProducts?.products?.length > 0 && newProducts?.products.map((product, index) => (
                    <ProductItem key={product._id} product={product} />
                  ))
                } 
              </div>

              <div className="d-flex mt-4 mb-4 bannerSec">
                <div className="banner cursor w-100">
                  <img src={banner3} alt="" className="cursor w-100" />
                </div>{" "}
                <div className="banner cursor w-100">
                  <img src={banner4} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection d-flex align-items-center mt-5 mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <p>$20 discount for your first order</p>
              <h3>Join our newsletter and get...</h3>
              <p className="text-sml newsdesc">
                Join our email subscription now to get updates <br /> on
                promotions and coupons.
              </p>

              <form>
                <IoMailOutline />
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                />
                <button>Subscribe</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={coupon} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
