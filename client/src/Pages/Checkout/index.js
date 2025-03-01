import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { toast } from "react-toastify";
import { fetchdatafromapi, postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
  });
  const navigate = useNavigate();
  const [cardItem, setCartItem] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // Sample order data - you would typically get this from your cart state or context
  const orderItems = [
    {
      name: "All Natural Italian-Style Chicken Meatballs",
      quantity: 1,
      price: 7.25,
    },
    {
      name: "All Natural Italian-Style Chicken Meatballs",
      quantity: 1,
      price: 7.25,
    },
  ];

  const subtotal = 10.54;

  useEffect(() => {
    fetchdatafromapi(`/api/cart`).then((res) => {
      setCartItem(res);
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.country === "" ||
      formData.state === "" ||
      formData.city === "" ||
      formData.address === "" ||
      formData.pincode === ""
    ) {
      toast.error("all fields are required");
      return;
    }
    if (formData.fullName.trim() === "") {
      toast.error("Full Name is required");
      return;
    }
    if (formData.email.trim() === "") {
      toast.error("Email is required");
      return;
    }
    if (formData.phone.trim() === "") {
      toast.error("Phone is required");
      return;
    }
    if (formData.city.trim() === "") {
      toast.error("City is required");
      return;
    }
    if (formData.state.trim() === "") {
      toast.error("State is required");
      return;
    }
    if (formData.country.trim() === "") {
      toast.error("Country is required");
      return;
    }
    if (formData.address.trim() === "") {
      toast.error("Address is required");
      return;
    }
    if (formData.pincode.trim() === "") {
      toast.error("Pincode is required");
      return;
    }
    if (formData.fullName.length < 3) {
      toast.error("Full Name must be at least 3 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Email format is wrong");
      return;
    }
    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }
    if (formData.address.length < 10) {
      toast.error("Address must be at least 10 characters");
      return;
    }
    if (formData.pincode.length !== 6) {
      toast.error("Pincode must be 6 characters");
      return;
    }
    console.log("Form submitted:", formData);

    const addressInfo = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address:
        formData.address +
        formData.city +
        formData.state +
        formData.country +
        formData.pincode,
      date: new Date().toLocaleString("en-us", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
      amount: (
        cardItem?.length !== 0 &&
        cardItem
          .map((item) => parseInt(item.price) * item.quantity)
          .reduce((total, value) => total + value, 0)
      ) * 100,
      currency: "INR",
      order_receipt: "order_receipt_" + formData.fullName,
      name: "sellfy Ecommerce",
      description: "Payment for order",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        // const orderId = response.razorpay_order_id;

        const payload = {
            name: addressInfo.name,
            phone: addressInfo.phone,
            address: addressInfo.address,
            date: addressInfo.date,
            amount: (
                cardItem?.length !== 0 &&
                cardItem
                  .map((item) => parseInt(item.price) * item.quantity)
                  .reduce((total, value) => total + value, 0)
            ),
            paymentId: paymentId,
            email: user?.email,
            userId: user?.userId,
            products: cardItem,



        };

    console.log("payload = ", payload);

        postData("/api/orders/create", payload).then((res) => {
            navigate("/")
        });
      },
      theme:{
        color:"#000000"
      }

    };

    var pay = new window.Razorpay(options);
    pay.open();

    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Left side - Checkout Form (70%) */}
      <form onSubmit={handleSubmit} className="">
        <div className="checkout-container w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>

          <div className="flex gap-2 w-full">
            <div className="mb-6 w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
                Billing Information
              </h3>

              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    City/Town
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Pincode
                </label>
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right side - Order Summary (30%) */}
            <div className="mt-5 mr-5 md:w-[30%] w-full bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                YOUR ORDER
              </h2>

              <div className="border-b border-gray-200 pb-2">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-600">Product</span>
                  <span className="font-medium text-gray-600">Subtotal</span>
                </div>
              </div>

              <div className="py-4 space-y-4 border-b border-gray-200">
                {cardItem?.length !== 0 &&
                  cardItem.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start"
                    >
                      <div className="text-gray-700">
                        {item.productTitle.substr(0, 20)}... × {item.quantity}
                      </div>
                      <div className="text-gray-700">
                      ₹{item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="py-4 flex justify-between items-center">
                <span className="font-medium text-gray-700">Subtotal</span>
                <span className="font-medium text-gray-700">
                ₹
                  {cardItem?.length !== 0 &&
                    cardItem
                      .map((item) => parseInt(item.price) * item.quantity)
                      .reduce((total, value) => total + value, 0)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded flex items-center justify-center transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
