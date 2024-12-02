import { IoIosPricetags } from "react-icons/io";
import { SlSizeFullscreen } from "react-icons/sl";
import 'swiper/css';
import { IoIosColorPalette } from "react-icons/io";

import { IoIosSettings } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
 

import { TbCategory2 } from "react-icons/tb";

import { TbBrandSnowflake } from "react-icons/tb";

import { TbBrandAmigo } from "react-icons/tb";

import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ProductDetails = () => {
    return (
        <div className="right-content w-100">
            <div className=" p-12">
                <div className="header bg-white border rounded-xl p-3">
                    <h4>Product View</h4>
                </div>
            </div>

            <div className="card">
                <div className="row">
                    <div className="col-md-5">

                        <h4 className='mb-3 mt-3 pl-2'>Product Gallery</h4>

                        <div className="siperWrapper py-3 pl-2">
                            <Swiper
                                spaceBetween={50}
                                navigation={true}
                                modules={[Navigation]}
                                slidesPerView={1}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" alt="" />
                                </SwiperSlide>
                                ...
                            </Swiper>
                        </div>

                        


                    </div>
                    <div className="col-md-7">
                        <div className='rightContent py-3 pl-2'><h4>Product Details</h4>
                            <h4 className='p-2 mt-2 '>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>

                                <div className="row mt-4">
                                    <div className="col-sm-5">
                                        <div className="flex align-items-center">
                                            <span className="icon mr-2"><TbBrandSnowflake /></span>
                                            <span className="brands">Brand</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 colon-center">:</div>
                                    <div className="col-sm-6">
                                        <div className="brand-name">
                                            <span className="text-sm-font-normal text-gray-300">Ecasty</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-sm-5">
                                        <div className="flex align-items-center">
                                            <span className="icon mr-2"><TbCategory2 /></span>
                                            <span className="brands">Category</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 colon-center">:</div>
                                    <div className="col-sm-6">
                                        <div className="brand-name">
                                            <span className="text-sm-font-normal text-gray-300">Men's</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-sm-5">
                                        <div className="flex align-items-center">
                                            <span className="icon mr-2"><IoIosSettings /></span>
                                            <span className="brands">Tags</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 colon-center">:</div>
                                    <div className="col-sm-6">
                                        <div className="brand-name">
                                            <span className="text-sm-font-normal text-gray-300">Former</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-sm-5">
                                        <div className="flex align-items-center">
                                            <span className="icon mr-2"><IoIosColorPalette /></span>
                                            <span className="brands">color</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 colon-center">:</div>
                                    <div className="col-sm-6">
                                        <div className="brand-name">
                                            <span className="text-sm-font-normal text-gray-300">RED</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-sm-5">
                                        <div className="flex align-items-center">
                                            <span className="icon mr-2"><SlSizeFullscreen /></span>
                                            <span className="brands">size</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 colon-center">:</div>
                                    <div className="col-sm-6">
                                        <div className="brand-name">
                                            <span className="text-sm-font-normal text-gray-300">M, &nbsp; L &nbsp; XL</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-sm-5">
                                        <div className="flex align-items-center">
                                            <span className="icon mr-2"><IoIosPricetags /></span>
                                            <span className="brands">Price</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 colon-center">:</div>
                                    <div className="col-sm-6">
                                        <div className="brand-name">
                                            <span className="text-sm-font-normal text-gray-300">$100</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-sm-5">
                                        <div className="flex align-items-center">
                                            <span className="icon mr-2"><MdOutlineProductionQuantityLimits /></span>
                                            <span className="brands">Stock</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 colon-center">:</div>
                                    <div className="col-sm-6">
                                        <div className="brand-name">
                                            <span className="text-sm-font-normal text-gray-300">(73) pieces</span>
                                        </div>
                                    </div>
                                </div>

                                //TODO: ADD PRODUCT DESCRIPTION vid 10 30 min
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails