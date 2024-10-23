import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Component/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
const mycontext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect((url) => {
    getCountryList("https://countriesnow.space/api/v0.1/countries/");
  },[])


  const getCountryList = async (url) => {
    const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    })
  }

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry
  }
  return <>
  <BrowserRouter>
  <mycontext.Provider value={values}>
  <Header />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
    </Routes>
  
  </mycontext.Provider>
  </BrowserRouter>
  </>
}

export default App;
export {mycontext};
