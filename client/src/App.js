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
import { fetchdatafromapi, fetchdatafromapiwithid } from "./utils/api.js";
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
  const [isLogIn, setIsLogIn] = useState(false);
  const [productdata, setProductData] = useState([]);

  useEffect((url) => {
    getCountryList("https://countriesnow.space/api/v0.1/countries/");
  }, []);

 
  useEffect(()=>{
    const data = fetchdatafromapi("/api/category/").then((res) => {
      setCategories(res);
      
    });
   
    
    const data1 = fetchdatafromapi("/api/subcategory/").then((res) => {
      setsubCategories(res);
      
    });

  },[])

  useEffect(() => {
    if(isOpenProuctModal.isOpen == true){
      fetchdatafromapiwithid(`/api/products/${isOpenProuctModal.id}`).then((res) => {
      
        setProductData(res);
  
        
      })
    }
    
  }, [isOpenProuctModal]);

  const getCountryList = async (url) => {
    const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
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
    isLogIn,
    setIsLogIn,
    categories,
    subcategories
  };
  return (
    <>
      <BrowserRouter>
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
          </Routes>
          {isHeaderFooterShow && <Footer />}

          {isOpenProuctModal.isOpen ==true  && <ProductModal data={productdata}/>}
        </mycontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { mycontext };
