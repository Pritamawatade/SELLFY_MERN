import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slider from "react-slick";
import { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";

// import "react-inner-image-zoom/lib/InnerImageZoom/style.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductModal = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

const goto = (index) =>{
  zoomSlider.current.slickGoTo(index);
  zoomSliderBig.current.slickGoTo(index);

}

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <Dialog
        className="productModal"
        open={true}
        onClose={() => props.closeProductModal(false)}
      >
        <Button className="close_">
          <IoCloseSharp onClick={() => props.closeProductModal(false)} />
        </Button>
        <h4 className="mb-1">All Natural Italian-Style Chicken Meatballs</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands: </span>
            <span className="ml-2">Welch's</span>
          </div>

          <Rating
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <div className="productZoom">
              <Slider {...settings} className="zoomSliderBig" ref={zoomSliderBig}>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1.5}
                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg`}
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1.5}
                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`}
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1.5}
                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg`}
                  />
                </div>
              
         
              </Slider>
            </div>
            <Slider
              {...settings2}
              className="zoomSlider"
              ref={zoomSlider}
            >
              
              <div className="item">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className="w-100" 
                onClick={() => goto(0)}
                />
              </div>
              <div className="item">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg" alt="" className="w-100" onClick={() => goto(1)} />
              </div>
              <div className="item">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg" alt="" className="w-100" onClick={() => goto(2)} />
              </div>
           


            </Slider>
          </div>
          <div className="col-md-7">

            <div className="d-flex info align-item-center">
              <span className="oldPrice">$9.35</span>
              <span className="netPrice text-danger bolder">$7.35</span>
           
            </div>
            <span className="bg-green-100 text-green-600 p-1 px-2 mt-5 border-3 rounded-full">IN STOCK</span>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
