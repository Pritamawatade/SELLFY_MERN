import React from "react";
import Dialog from '@mui/material/Dialog';
import { IoSearchOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";

function CountryDrop() {
  return (
    <>
      <Button className="countryDrop">
        <div classname="info d-flex flex-column ">
          <span className="label">Your location</span>
          <span className="name"> India</span>
        </div>
        <FaAngleDown className="ml-auto" />
      </Button>


      <Dialog  open={true} className="locationmodal">
      <h3>Choose your location</h3>
      <p>Select your location to find the best deals and offers near you</p>
      <div className="headerSearch ml-3 mr-3 ">
        <input type="text" placeholder="Search your location" />
        <Button>
          <IoSearchOutline />
        </Button>

        <div className="locationList">
          <ul>
            <li><Button>India</Button></li>
            <li><Button>India</Button></li>
            <li><Button>India</Button></li>
            <li><Button>India</Button></li>
          </ul>
        </div>
      </div>
    </Dialog>
    </>
  );
}

export default CountryDrop;
