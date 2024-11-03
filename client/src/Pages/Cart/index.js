import { ImCross } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";


import QuantityBox from "../../Component/QuantityBox/QuantityBox.js";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd">Your cart</h2>
          <p>
            There are <b>3</b> products in your cart
          </p>

          <div className="row">
            <div className="col-md-8">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>SubTotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-200">
                      <td>
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartImgWrapper ">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-96x96.jpg"
                                alt=""
                              />
                            </div>
                            <h6 className="text-black">
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <p className="font-bold text-center">Price $7.25</p>
                      </td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className="font-bold">$7.25</td>
                      <td className="hover:text-xl">
                        <ImCross />
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-200">
                      <td>
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartImgWrapper ">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-96x96.jpg"
                                alt=""
                              />
                            </div>
                            <h6 className="text-black">
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <p className="font-bold text-center">Price $7.25</p>
                      </td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className="font-bold">$7.25</td>
                      <td className="hover:text-xl">
                        <ImCross />
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-200">
                      <td>
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartImgWrapper ">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-96x96.jpg"
                                alt=""
                              />
                            </div>
                            <h6 className="text-black">
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <p className="font-bold text-center">Price $7.25</p>
                      </td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className="font-bold">$7.25</td>
                      <td className="hover:text-xl">
                        <ImCross />
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-200">
                      <td>
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartImgWrapper ">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-96x96.jpg"
                                alt=""
                              />
                            </div>
                            <h6 className="text-black">
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <p className="font-bold text-center">Price $7.25</p>
                      </td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className="font-bold">$7.25</td>
                      <td className="hover:text-xl">
                        <ImCross />
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-200">
                      <td>
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartImgWrapper ">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-96x96.jpg"
                                alt=""
                              />
                            </div>
                            <h6 className="text-black">
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <p className="font-bold text-center">Price $7.25</p>
                      </td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className="font-bold">$7.25</td>
                      <td className="hover:text-xl">
                        <ImCross />
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-200">
                      <td>
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartImgWrapper ">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-96x96.jpg"
                                alt=""
                              />
                            </div>
                            <h6 className="text-black">
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <p className="font-bold text-center">Price $7.25</p>
                      </td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className="font-bold">$7.25</td>
                      <td className="hover:text-xl">
                        <ImCross />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border rounded-lg p-4 w-72">
                <h2 className="text-lg font-bold mb-4">CART TOTALS</h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-red-500 font-semibold">$12.31</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-500 font-semibold">Free</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Estimate for</span>
                  <span className="font-semibold">United Kingdom</span>
                </div>
                <div className="flex justify-between mt-4 border-t pt-2">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-red-500 font-semibold">$12.31</span>
                </div>
                <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors  flex items-center gap-2 justify-center">
                  <FaCartShopping /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
