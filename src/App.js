import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Header from "./Component/Header/Header";
function App() {
  return <>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
