import React, { useContext, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { IoSearchOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { mycontext } from "../../../App";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function CountryDrop() {
  const context = useContext(mycontext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryList, setCountryList] = useState(context.countryList);

  const selectedTab = (index, country) =>{
    setSelectedCountry(context.countryList[index].country);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  }

  useEffect(() => {
    setCountryList(context.countryList);
  },[context.countryList])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if(keyword.length > 0){
      const list = context.countryList.filter((item) => item.country.toLowerCase().includes(keyword));
      setCountryList(list);
    }else{
      setCountryList(context.countryList);
    }
  }
  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div classname="info d-flex flex-column ">
          <span className="label">Your location</span>
          <br />
          <span className="name"> {context.selectedCountry !== "" ? context.selectedCountry.length > 10 ? context.selectedCountry.substring(0, 10) + "..." : context.selectedCountry : "Select location"}</span>
        </div>
        <FaAngleDown className="ml-auto" />
      </Button>

      <Dialog
        open={isOpenModal}
        TransitionComponent={Transition}

        onClose={() => setIsOpenModal(false)}
        className="locationmodal"
      >
        <h3>Choose your location</h3>
        <p>Select your location to find the best deals and offers near you</p>
        <Button className="close_" onClick={() => setIsOpenModal(false)}>
          <IoCloseSharp />
        </Button>
        <div className="headerSearch  ">
          <input type="text"  placeholder="Search your location" onChange={filterList}/>
          <Button>
            <IoSearchOutline />
          </Button>
        </div>

        <ul className="locationList mt-3">
          
          {countryList.map((item, index) => {
            return <li key={index}>
              <Button onClick={() => {setIsOpenModal(false); selectedTab(index, item.country)}}>{item.country}</Button>
            </li>
          })}
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDrop;
