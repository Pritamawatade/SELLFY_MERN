import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductUpload from "./pages/Product-upload";
import CategoryUpload from "./pages/CategoryUpload/";
import CategoryList from "./pages/CategoryList";
import LoadingBar from 'react-top-loading-bar';
import ProductList from "./pages/ProductList";
import ProductEdit from "./pages/ProductEdit";
import { fetchdatafromapi } from "./utils/api";
import AddSubCategory from "./pages/SubCategory/SubCatUpload";
import SubCatList from "./pages/SubCategory/SubCatList";
import { ToastContainer } from "react-toastify";

const myContext = createContext();
export const LoadingContext = createContext();

function App() {
  const [isTogglesidebar, setIsToggleSidebar] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? false : true;
  });
  const loadingRef = useRef(null);

  const startLoading = () => {
    loadingRef.current.continuousStart();
  };

  const stopLoading = () => {
    loadingRef.current.complete();
  };

  
  const fetchsubCategories = async () => {
    try {
        const data = await fetchdatafromapi('/api/subcategory/');
        if (data) {
          setSubCategories(data);
          console.log(subCategories);
        }
    } catch (error) {
        console.error('Error fetching subcategories:', error);
    }
};
const fetchCategories = async () => {
  try {
      const data = await fetchdatafromapi('/api/category');
      if (data) {
          setCategories(data);
          console.log(categories);
      }
  } catch (error) {
      console.error('Error fetching categories:', error);
  }
};

  useEffect(() => {
      fetchCategories();
      fetchsubCategories();
 
  }, []);

  useEffect(() => {
    if (themeMode) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [themeMode]);
  

  return (
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
      <myContext.Provider value={{ isTogglesidebar, setIsToggleSidebar, isHeaderFooterShow, setIsHeaderFooterShow, themeMode, setThemeMode, categories,subCategories }}>
        <LoadingContext.Provider value={{ startLoading, stopLoading }}>
          <LoadingBar
            color='#f11946'
            ref={loadingRef}
            shadow={true}
            height={3}
          />
          {isHeaderFooterShow && <Header />}
          <div className="d-flex main">
            {isHeaderFooterShow && (
              <div
                className={`sideWrapper ${
                  isTogglesidebar == true ? "toggle" : ""
                }`}
              >
                <Sidebar />
              </div>
            )}
            <div className={`content ${isTogglesidebar == true ? "toggle" : ""}`}>
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/login" exact={true} element={<Login />} />
                <Route path="/signup" exact={true} element={<SignUp />} />
                <Route path="/product/upload" exact={true} element={<ProductUpload />} />
                <Route path="/product/edit/:id" exact={true} element={<ProductEdit />} />
                <Route path="/product" exact={true} element={<ProductList />} />
                <Route path="/Category/add" exact={true} element={<CategoryUpload />} />
                <Route path="/subCategory/add" exact={true} element={<AddSubCategory />} />
                <Route path="/subCategory/list" exact={true} element={<SubCatList />} />
                <Route path="/Category/list" exact={true} element={<CategoryList />} />
                <Route
                  path="/product/details"
                  exact={true}
                  element={<ProductDetails />}
                />
              </Routes>
            </div>
          </div>
        </LoadingContext.Provider>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { myContext };
  