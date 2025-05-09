import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Component/Footer/index.js";
import ProductModal from "./Component/ProductModal/index.js";
import Listing from "./Pages/Listing/index.js";
import ProductDetials from "./Pages/ProductDetails/index.js";
import Cart from "./Pages/Cart/index.js";
import SignIn from "./Pages/SignIn/index.js";
import SignUp from "./Pages/SignUp/index.js";
import {
  fetchdatafromapi,
  fetchdatafromapiwithid,
  postData,
} from "./utils/api.js";
import { toast, ToastContainer } from "react-toastify";
import Checkout from "./Pages/Checkout/index.js";
import Orders from "./Pages/Orders/index.js";
import AboutUsPage from "./Pages/About/index.js";
const mycontext = createContext();

function App() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setsubCategories] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProuctModal, setIsOpenProductModal] = useState({
    id: "",
    isOpen: false,
  });
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  let [cartFeilds, setCartFeilds] = useState({});


  const [user, setUser] = useState({
    name: "",
    email: "",  
    id: "",
  });
  const [productdata, setProductData] = useState([]);
  const [cartData, setCartData] = useState();
  
  useEffect((url) => {
    getCountryList("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null && token !== "" && token !== undefined) {
      setIsLogin(true);
      const user = JSON.parse(localStorage.getItem("user"));

      setUser(user);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);
  useEffect(() => {
    fetchdatafromapi("/api/category/").then((res) => {
      setCategories(res);
    });

    fetchdatafromapi("/api/subcategory/").then((res) => {
      setsubCategories(res);
    });
  }, []);

  useEffect(() => {
    if (isOpenProuctModal.isOpen === true) {
      fetchdatafromapiwithid(`/api/products/${isOpenProuctModal.id}`).then(
        (res) => {
          setProductData(res);
        }
      );
    }
  }, [isOpenProuctModal]);

  const getCountryList = async (url) => {
    await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
  };

  const addToCart = (data) => {
    postData(`/api/cart/add`, data)
      .then((res) => {
        console.log(res);

        if (
          res !== null &&
          res !== undefined &&
          res !== "" &&
          res?.data?.message !== "product already exist in cart"
        ) {
          toast.success("item added to cart");
        } else if (res?.data?.message === "product already exist in cart") {
          toast.error("product already exist in cart");
        } else {
          toast.error("something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProuctModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
    user,
    setUser,
    categories,
    subcategories,
    addToCart,
    cartData,
    setCartData,
  };
  return (
    <>
   
      <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        <mycontext.Provider value={values}>
          {isHeaderFooterShow && <Header />}

          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/subCat/:id" exact={true} element={<Listing />} />
            <Route
              path="/product/:id"
              exact={true}
              element={<ProductDetials />}
            />
            <Route path="/cart" exact={true} element={<Cart />} />
            <Route path="/SignIn" exact={true} element={<SignIn />} />
            <Route path="/Signup" exact={true} element={<SignUp />} />
            <Route path="/checkout" exact={true} element={<Checkout />} />
            <Route path="/orders" exact={true} element={<Orders />} />
            <Route path="/about" exact={true} element={<AboutUsPage />} />
          </Routes>
          {isHeaderFooterShow && <Footer />}

          {isOpenProuctModal.isOpen === true && (
            <ProductModal data={productdata} />
          )}
        </mycontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { mycontext };
