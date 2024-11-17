import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { createContext, useContext, useState } from "react";

const myContext = createContext();
function App() {
  const [isTogglesidebar, setIsToggleSidebar] = useState(false);

  const values = {
    isTogglesidebar,
    setIsToggleSidebar,
  }


  return (
    <BrowserRouter>
      <myContext.Provider value={values}>
        <Header />
        <div className="d-flex main">
          <div className={`sideWrapper ${isTogglesidebar == true ? "toggle" : ""}`}>
            <Sidebar />
          </div>
          <div className={`content ${isTogglesidebar == true ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </myContext.Provider>
    </BrowserRouter>
  );
}
export default App;
export {myContext};
