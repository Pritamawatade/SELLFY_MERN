import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/products/ProductDetails";
import ProductUpload from "./pages/products/ProductUpload";
import CategoryUpload from "./pages/Categories/CategoryUpload";
import CategoryList from "./pages/Categories/CategoryList";
import LoadingBar from "react-top-loading-bar";
import ProductList from "./pages/products";
import ProductEdit from "./pages/products/ProductEdit";
import { fetchdatafromapi } from "./utils/api";
import AddSubCategory from "./pages/Categories/SubCatUpload";
import SubCatList from "./pages/Categories/SubCatList";
import { ToastContainer } from "react-toastify";
import AddProductRAM from "./pages/products/AddProductRAM";
import AddProductWIGHT from "./pages/products/AddProductWeight";
import AddProductSIZE from "./pages/products/AddProductSIZE";
import Orders from "./pages/Orders";

const myContext = createContext();
export const LoadingContext = createContext();

function App() {
  const [isTogglesidebar, setIsToggleSidebar] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  // const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    email: "",
    id:""
  });
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
      const data = await fetchdatafromapi("/api/subcategory/");
      if (data) {
        setSubCategories(data);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };
  const fetchCategories = async () => {
    try {
      const data = await fetchdatafromapi("/api/category");
      if (data) {
        setCategories(data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
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

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null && token !== "" &&   token !== undefined) {
      setIsLogin(true);
      const user = JSON.parse(localStorage.getItem("user"))

      setUser(user)
    }else{
      setIsLogin(false);
      // navigate("/login")

    }
  }, [isLogin]);

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
      ></ToastContainer>
      <myContext.Provider
        value={{
          isTogglesidebar,
          setIsToggleSidebar,
          isHeaderFooterShow,
          setIsHeaderFooterShow,
          themeMode,
          setThemeMode,
          categories,
          subCategories,
          user,
          setUser,
          isLogin,
          setIsLogin
        }}
      >
        <LoadingContext.Provider value={{ startLoading, stopLoading }}>
          <LoadingBar
            color="#f11946"
            ref={loadingRef}
            shadow={true}
            height={3}
          />
          {isHeaderFooterShow && <Header />}
          <div className="d-flex main">
            {isHeaderFooterShow && (
              <div
                className={`sideWrapper ${
                  isTogglesidebar === true ? "toggle" : ""
                }`}
              >
                <Sidebar />
              </div>
            )}
            <div
              className={`content ${isTogglesidebar == true ? "toggle" : ""}`}
            >
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/login" exact={true} element={<Login />} />
                <Route path="/signup" exact={true} element={<SignUp />} />
                <Route path="/orders" exact={true} element={<Orders />} />
                <Route
                  path="/product/upload"
                  exact={true}
                  element={<ProductUpload />}
                />
                <Route
                  path="/product/edit/:id"
                  exact={true}
                  element={<ProductEdit />}
                />
                <Route path="/product" exact={true} element={<ProductList />} />
                <Route
                  path="/product/RAMupload"
                  exact={true}
                  element={<AddProductRAM />}
                />
                <Route
                  path="/product/WEIGHTupload"
                  exact={true}
                  element={<AddProductWIGHT />}
                />
                <Route
                  path="/product/SIZEupload"
                  exact={true}
                  element={<AddProductSIZE />}
                />
                <Route
                  path="/Category/add"
                  exact={true}
                  element={<CategoryUpload />}
                />
                <Route
                  path="/subCategory/add"
                  exact={true}
                  element={<AddSubCategory />}
                />
                <Route
                  path="/subCategory/list"
                  exact={true}
                  element={<SubCatList />}
                />
                <Route
                  path="/Category/list"
                  exact={true}
                  element={<CategoryList />}
                />
                <Route
                  path="/product/:id"
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
