import { useState } from "react";
import Rating from "@mui/material/Rating";

import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

import ProductZoom from "../../Component/ProductZoom";
import QuantityBox from "../../Component/QuantityBox/QuantityBox";
import Button from "@mui/material/Button";

const ProductDetials = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
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
                  <MdOutlineCompareArrows className="text-center mr-2" />
                </Button>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTab(0)}>Description</Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTab(1)}>
                    Aditional Info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTab(2)}>Review (3)</Button>
                </li>
              </ul>

              {activeTab === 0 && (
                <div className="tabContent">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto pariatur temporibus aut neque itaque expedita sint
                    ducimus, asperiores blanditiis, cupiditate harum. Iure
                    deserunt, odio dolorem non facere cum nulla, est quisquam
                    dignissimos repudiandae impedit ex quas esse quis suscipit
                    excepturi consequatur quos doloribus rem eligendi quibusdam
                    cupiditate possimus! Autem quaerat in hic porro distinctio
                    modi, obcaecati dignissimos cumque sunt exercitationem
                    quibusdam inventore ea amet ad iusto corporis! Laboriosam
                    expedita cupiditate amet dolor mollitia iusto illum a optio
                    ullam, odio voluptatibus qui modi odit laudantium natus
                    aspernatur, quis earum repellendus neque sapiente fugit vel
                    soluta consectetur! Et molestiae id nobis voluptate?
                  </p>
                </div>
              )}

              {activeTab === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr class="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr class="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr class="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answder</h3>
                      <br />
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                              alt=""
                            />
                          </div>
                          <span className="font-bold capitalize text-lg">
                            ollena
                          </span>
                        </div>
                        <div className="info">
                          <div className="flex items-center">
                            <p className="text-slate-500 text-sm ">
                              Date 2 Nov 2024 at 07:05 PM
                            </p>
                            <div className="ml-auto">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quis commodi unde labore dolorum perferendis
                            facere, dicta nihil iusto corrupti adipisci rerum
                            nam alias autem nesciunt laudantium dolore deleniti,
                            dolorem aperiam!
                          </p>
                        </div>
                      </div>

                      <div className="card p-3 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                              alt=""
                            />
                          </div>
                          <span className="font-bold capitalize text-lg">
                            ollena
                          </span>
                        </div>
                        <div className="info">
                          <div className="flex items-center">
                            <p className="text-slate-500 text-sm ">
                              Date 2 Nov 2024 at 07:05 PM
                            </p>
                            <div className="ml-auto">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quis commodi unde labore dolorum perferendis
                            facere, dicta nihil iusto corrupti adipisci rerum
                            nam alias autem nesciunt laudantium dolore deleniti,
                            dolorem aperiam!
                          </p>
                        </div>
                      </div>

                      <div className="card p-3 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                              alt=""
                            />
                          </div>
                          <span className="font-bold capitalize text-lg">
                            ollena
                          </span>
                        </div>
                        <div className="info">
                          <div className="flex items-center">
                            <p className="text-slate-500 text-sm ">
                              Date 2 Nov 2024 at 07:05 PM
                            </p>
                            <div className="ml-auto">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quis commodi unde labore dolorum perferendis
                            facere, dicta nihil iusto corrupti adipisci rerum
                            nam alias autem nesciunt laudantium dolore deleniti,
                            dolorem aperiam!
                          </p>
                        </div>
                      </div>

                      <div className="card p-3 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                              alt=""
                            />
                          </div>
                          <span className="font-bold capitalize text-lg">
                            ollena
                          </span>
                        </div>
                        <div className="info">
                          <div className="flex items-center">
                            <p className="text-slate-500 text-sm ">
                              Date 2 Nov 2024 at 07:05 PM
                            </p>
                            <div className="ml-auto">
                              <Rating
                                size="small"
                                name="read-only"
                                value={4}
                                readOnly
                              />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quis commodi unde labore dolorum perferendis
                            facere, dicta nihil iusto corrupti adipisci rerum
                            nam alias autem nesciunt laudantium dolore deleniti,
                            dolorem aperiam!
                          </p>
                        </div>
                      </div>

                      <br />
                      <br />

                      <form className="reviewForm">
                        <h4>Add a Review</h4>
                        <div className="form-group">
                          <textarea
                            name=""
                            placeholder="Write a review"
                            id=""
                            className="form-control"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                placeholder="Name"
                                name=""
                                className="form-control"
                                id=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                placeholder="Email"
                                name=""
                                className="form-control"
                                id=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Website"
                            name=""
                            className="form-control"
                            id=""
                          />
                        </div>

                        <div className="form-group">
                          <Button className="bg-blue-300 text-black">
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4 mb-4 reviewSection">
                      <div className="flex items-center content-center">
                        <Rating
                          name="read-only"
                          value={4.5}
                          readOnly
                          precision={0.5}
                          size="small"
                          className=""
                        />
                        <h4 className="capitalize text-lg ml-2">
                          Customor Reiview
                        </h4>
                      </div>

                      <div className="progress d-flex align-items-center">
                      <span className="mr-3 text-lg  font-normal bg-white">5 Star</span>
                      <div className="progress w-3/4">
                        <div style={{width:'75%'}} className="progress-bar">
                          75%
                        </div>
                      </div>
                    </div>

                      <div className="progress d-flex align-items-center">
                      <span className="mr-3 text-lg  font-normal bg-white">4 Star</span>
                      <div className="progress w-3/4">
                        <div style={{width:'60%'}} className="progress-bar">
                          60%
                        </div>
                      </div>
                    </div>

                      <div className="progress d-flex align-items-center">
                      <span className="mr-3 text-lg  font-normal bg-white">3 Star</span>
                      <div className="progress w-3/4">
                        <div style={{width:'50%'}} className="progress-bar">
                          50%
                        </div>
                      </div>
                    </div>

                      <div className="progress d-flex align-items-center">
                      <span className="mr-3 text-lg  font-normal bg-white">2 Star</span>
                      <div className="progress w-3/4">
                        <div style={{width:'35%'}} className="progress-bar ">
                          35%
                        </div>
                      </div>
                    </div>

                    </div>

                 

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetials;
