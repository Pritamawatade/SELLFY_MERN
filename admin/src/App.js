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

const myContext = createContext();
export const LoadingContext = createContext();

function App() {
  const [isTogglesidebar, setIsToggleSidebar] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
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
      <myContext.Provider value={{ isTogglesidebar, setIsToggleSidebar, isHeaderFooterShow, setIsHeaderFooterShow, themeMode, setThemeMode }}>
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
                <Route path="/product" exact={true} element={<ProductList />} />
                <Route path="/Category/add" exact={true} element={<CategoryUpload />} />
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
