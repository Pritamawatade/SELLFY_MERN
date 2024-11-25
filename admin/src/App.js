import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { createContext, useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const myContext = createContext();
function App() {
  const [isTogglesidebar, setIsToggleSidebar] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [themeMode, setThemeMode] = useState(true);

useEffect(() => {
  if(themeMode){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  }else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}, [themeMode]) 
  const values = {
    isTogglesidebar,
    setIsToggleSidebar,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    themeMode,
    setThemeMode
  }


  return (
    <BrowserRouter>
      <myContext.Provider value={values}>
       {
        isHeaderFooterShow && <Header /> 
       }
        <div className="d-flex main">
          {
            isHeaderFooterShow && <div className={`sideWrapper ${isTogglesidebar == true ? "toggle" : ""}`}>
            <Sidebar />
          </div>
          }
          <div className={`content ${isTogglesidebar == true ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signup" exact={true} element={<SignUp />} />
              <Route path="/product/details" exact={true} element={<ProductDetails />} />
            </Routes>
          </div>
        </div>
      </myContext.Provider>
    </BrowserRouter>
  );
}
export default App;
export {myContext};
