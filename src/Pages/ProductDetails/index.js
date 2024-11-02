import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

import ProductZoom from "../../Component/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Component/QuantityBox/QuantityBox";
import Button from "@mui/material/Button";

const ProductDetials = () => {
  const [activeSize, setActiveSize] = useState(0);
  const isActive = (size) => {
    setActiveSize(size);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom />
            </div>
            <div className="col-md-8">
              <div className="product_details">
                <h3>All Natural Italian-Style Chicken Meatballs</h3>
                <ul className="d-flex align-items-center">
                  <li className="d-flex align-items-center">
                    <span className="text-slate-400">Brands : </span>
                    <span className="font-normal">Welch's</span>
                  </li>
                  <li className="d-flex align-items-center ml-3">
                    <Rating
                      name="read-only"
                      value={4.5}
                      readOnly
                      precision={0.5}
                      size="small"
                      className=""
                    />
                    <span className="text-slate-400 ml-1">1 Review</span>
                  </li>
                </ul>

                <div class="d-flex align-items-center">
                  <span class="oldPrice line-through mr-2 text-lg">$15.00</span>
                  <span class="netPrice text-danger text-2xl font-semibold">
                    $10.00
                  </span>
                </div>
              </div>

              <div className="stock mt-5">
                <span className="  bg-green-600 rounded-full p-2 text-sm font-medium text-green-200">
                  IN STOCK
                </span>
              </div>

              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                consequatur cum error, veniam expedita explicabo est ipsam
                numquam. Adipisci dolor ab quidem iste cum rerum facilis, et
                accusantium illum quos labore architecto! Enim eum nam
                accusantium! Quidem nulla dolorum voluptates?
              </p>

              <div className="d-flex align-items-center productSize">
                <span>Size / weight : </span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onclick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onclick={() => isActive(1)}
                    >
                      200g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onclick={() => isActive(2)}
                    >
                      500g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize == 3 ? "active" : "n"}`}
                      onclick={() => isActive(3)}
                    >
                      990g
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-3 d-flex align-items-center info1">
                <QuantityBox />
                <Button class="bg-blue-600 ml-3 hover:bg-blue-700 text-white font-normal py-2 px-8 rounded-full">
                  Add to Cart
                </Button>
                <Button class=" bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4 text-2xl h-12 w-12 p-2">
                <CiHeart />
                </Button>
                <Button class="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-2xl h-12 w-12 p-2 text-center">
                <MdOutlineCompareArrows className="text-center mr-2"/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetials;
