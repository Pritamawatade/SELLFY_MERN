import { ImCross } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";

import QuantityBox from "../../Component/QuantityBox/QuantityBox.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteCategory, editdata, fetchdatafromapi } from "../../utils/api.js";
// import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const [productQuantity, setProductQuantity] = useState();
  let [cartFeilds, setCartFeilds] = useState({});
  const [cardItem, setCartItem] = useState([]);
  const [changeQuantity, setchangeQuantity] = useState(0)
  const quantity = (val) => {
    setProductQuantity(val);
    setchangeQuantity(val)
  };

  const selectedItem = (item, quantity) => {
    const user = JSON.parse(localStorage.getItem("user"));
if(changeQuantity !== 0){
  
  cartFeilds.productTitle = item?.productTitle;
  cartFeilds.image = item?.image;
  cartFeilds.rating = item?.rating;
  cartFeilds.price = item?.price;
  cartFeilds.quantity = quantity;
  cartFeilds.subTotal = parseInt(item?.price * quantity);
  cartFeilds.productId = item?._id;
  cartFeilds.userId = user?.userId;

  editdata(`/api/cart/${item?._id}`, cartFeilds).then((res) => {
    // console.log(res?.data);
    fetchdatafromapi(`/api/cart`).then((resp) => {
      setCartItem(resp);
    });
  });
}

  
  };

  useEffect(() => {
    fetchdatafromapi(`/api/cart`).then((res) => {
      setCartItem(res);
    });
  }, []);

  const remove = (id)=>{
    deleteCategory(`/api/cart/`,id).then(()=>{
      
    fetchdatafromapi(`/api/cart`).then((res) => {
      setCartItem(res);
    });
    })

  }
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd">Your cart</h2>
          <p>
            There are <b>{cardItem.length}</b> products in your cart
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
                    {cardItem?.length !== 0 &&
                      cardItem?.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-200">
                          <td>
                            <Link to={`/product/${item?.productId}`}>
                              <div className="d-flex align-items-center cartImgWrapper">
                                <div
                                  className="imgWrapper"
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                  }}
                                >
                                  <img
                                    className="img-fluid"
                                    src={item.image}
                                    alt={item.productTitle.substr(1,50)}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                                <h6 className="text-gray-700 ml-3">
                                  {item.productTitle.substr(1,30)+"..."}
                                </h6>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <p className="font-bold text-center">
                              ${item.price.toFixed(2)}
                            </p>
                          </td>
                          <td>
                            <QuantityBox
                              quantity={quantity}
                              item={item}
                              value={item?.quantity }
                              selectedItem={selectedItem}
                            />
                          </td>
                          <td className="font-bold">
                            ${item.subTotal.toFixed(2)}
                          </td>
                          <td
                          onClick={()=>remove(item?._id)}
                          className="hover:text-xl cursor-pointer">
                            <ImCross />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>


            

            <div className="col-md-4">
              <div className="border rounded-lg p-4 w-72">
                <h2 className="text-lg font-bold mb-4">CART TOTALS</h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-red-500 font-semibold">{
                cardItem?.length !== 0 && cardItem.map(item =>  parseInt(item.price) * item.quantity).reduce((total, value)=>total + value,0)
                }</span>
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
                  <span className="text-red-500 font-semibold">{
                cardItem?.length !== 0 && cardItem.map(item =>  parseInt(item.price) * item.quantity).reduce((total, value)=>total + value,0)
                }</span>
                </div>
                <Link to={"/checkout"}>
                <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2 justify-center">
                  <FaCartShopping /> Proceed To Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
