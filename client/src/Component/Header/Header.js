import { Link } from "react-router-dom";
import Logo from "../../assets/images/sellfy-wordmark-1.svg";
import CountryDrop from "./CountryDropdown";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { mycontext } from "../../App";

const Header = () => {
  const context = useContext(mycontext);
  
  return (
    <>
      <div className="headerwrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mt-0 mb-0 text-center">
              we are happy to serve you <b>quality product</b>
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logowrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={Logo} alt="logo" className="img-fluid" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                {context.countryList.length !==0 && <CountryDrop />}

                {/* Header search bar start here */}

                <SearchBox />

                {/* Header search bar end here */}

                 <div className="part3 d-flex align-items-center ml-auto">
                  {
                    context.isLogIn == true ? <Button className="circle ml-3">
                    <FiUser />
                  </Button> : <Link to="/signin"><button className="bg-sky-500 m-2 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"> SignIn </button></Link>
                  }
                 
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">

                    <Button className="circle ml-2">
                    <IoBagOutline />
                      
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">1</span>
                    </div>

                  </div>
                 </div>

              </div>
            </div>
          </div>
        </header>
          <Navigation />

      </div>
      {/* <Home /> */}
    </>
  );
};

export default Header;
