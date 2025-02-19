import React, { useContext, useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link, useParams } from "react-router-dom";
import { mycontext } from "../../App";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { fetchdatafromapi } from "../../utils/api";
import Rating from '@mui/material/Rating';

function Sidebar(props) {
  const [value, setValue] = useState([100, 60000]);
  const [filterSubCat, setFilterSubCat] = useState([]);
  const [subCatId, setSubCatId] = useState();
  const { id } = useParams();
  const handleChange = (event) => {
    setFilterSubCat(event.target.value); 
    props.filterData(event.target.value);
    setSubCatId(event.target.value);
  };

  const context = useContext(mycontext);

  useEffect(() => {
    setFilterSubCat(id);
    setSubCatId(id);
}, [id]);
const filterBySubCat = (subCatId) => {
      setSubCatId(id);
    setSubCatId(subCatId);
    
  };

  useEffect(() => {
    props.filterByPrice(value, filterSubCat);
  }, [value]);
 
 

  const filterByRating = (rating) =>{
    props.filterByRating(rating, subCatId);
  }
 
 

  return (
    <>
      <div className="sidebar">
        <div className="filterbox mb-3">
          <h5 className="text-sm font-bold uppercase mb-3">
            Product Categories
          </h5>
          <div className="scroll ">
            <ul>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  subcategories
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={filterSubCat}
                  onChange={handleChange}
                >
                  {context?.subcategories?.length !== 0 &&
                    context?.subcategories?.map((item, index) => {
                      return (
                        <li key={index}>
                          {/* <FormControlLabel
                        onClick={() => filterBySubCat(item._id)}
                        control={<Checkbox />}
                        label={item.subCategory}
                      /> */}
                          <FormControlLabel
                            onClick={() => filterBySubCat(item._id)}
                            value={item._id}
                            control={<Radio />}
                            label={item.subCategory}
                          />
                        </li>
                      );
                    })}
                </RadioGroup>
              </FormControl>
            </ul>
          </div>
        </div>

        <div className="filterbox mt-5">
          <h5 className="text-sm font-bold uppercase mb-3">FILTER BY PRICE</h5>

          <RangeSlider
            min={100}
            max={60000}
            step={1}
            value={value}
            onChange={(value) => setValue(value)}
            onInput={(value) => setValue(value)}
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-success">Rs: {value[0]}</strong>
            </span>
            <span className="ml-auto">
              To: <strong className="text-success">Rs: {value[1]}</strong>
            </span>
          </div>
        </div>


        <div className="filterbox mt-3 mb-4">
          <h5 className="text-sm font-bold uppercase mb-3">BRANDS:</h5>
          <div className="scroll ">
            <ul>
              <li onClick={()=>filterByRating(1)}>
              <Rating name="half-rating-read" defaultValue={1}  readOnly />
              </li>
              <li onClick={()=>filterByRating(2)}>
              <Rating name="half-rating-read" defaultValue={2}  readOnly />
              </li>
              <li onClick={()=>filterByRating(3)}>
              <Rating name="half-rating-read" defaultValue={3}  readOnly />
              </li>
              <li onClick={()=>filterByRating(4)}>
              <Rating name="half-rating-read" defaultValue={4}  readOnly />
              </li>
              <li onClick={()=>filterByRating(5)}>
              <Rating name="half-rating-read" defaultValue={5}  readOnly />
              </li>
              
            </ul>
          </div>
        </div>
        <Link to="/">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
            alt=""
            className="w-100"
          />
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
