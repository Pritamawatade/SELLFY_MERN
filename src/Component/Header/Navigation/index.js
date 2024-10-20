import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navPart1">
              <Button className="allCatTab align-items-center">
                <span className="icon1 mr-2"><IoIosMenu /></span>
               <span className="text">All Categories</span>
              <span className="icon2 ml-2">  <FaAngleDown /> </span>
              </Button>
            </div>
            <div className="col-sm-10 navPart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">

                {/* //TODO: add icons to the near links */}
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item"><Link to="/">Fashion</Link></li>
                <li className="list-inline-item"><Link to="/">Electronics</Link></li>
                <li className="list-inline-item"><Link to="/">Bakery</Link></li>
                <li className="list-inline-item"><Link to="/">Groceries</Link></li>
                <li className="list-inline-item"><Link to="/">Mobiles</Link></li>
                <li className="list-inline-item"><Link to="/">Blogs</Link></li>
                <li className="list-inline-item"><Link to="/">Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navigation