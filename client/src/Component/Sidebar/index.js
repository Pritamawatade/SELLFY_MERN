import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";

function Sidebar() {
    const [value , setValue] = useState([100, 60000]);
    const [value2 , setValue2] = useState(0);

  return <>
  <div className="sidebar">
    <div className="filterbox mb-3">
        <h5 className="text-sm font-bold uppercase mb-3">Product Categories</h5>
        <div className="scroll ">
            <ul>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="men" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="woman" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="kids" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="gift" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="men" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="woman" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="kids" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="gift" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="men" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="woman" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="kids" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="gift" />
                </li>
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
        <span>From: <strong className="text-success">Rs: {value[0]}</strong></span>
        <span className="ml-auto">From: <strong className="text-success">Rs: {value[1]}</strong></span>
    </div>
        
    </div>

   
    <div className="filterbox mt-3">
        <h5 className="text-sm font-bold uppercase mb-3">Product Status</h5>
        <div className="scroll ">
            <ul>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="In Stock" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="In Sale" />
                </li>
               
               
            </ul>
        </div>
    </div>

    <div className="filterbox mt-3 mb-4" >
        <h5 className="text-sm font-bold uppercase mb-3">BRANDS:</h5>
        <div className="scroll ">
            <ul>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Oreo" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Whelch's" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Oreo" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Whelch's" />
                </li>
               
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Oreo" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Whelch's" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Oreo" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Whelch's" />
                </li>
               
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Oreo" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Whelch's" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Oreo" />
                </li>
                <li>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Whelch's" />
                </li>
            </ul>
        </div>
    </div>
    <Link to="/"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="" className="w-100" /></Link>
  </div>
  </>;
}



export default Sidebar;
