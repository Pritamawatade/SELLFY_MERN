
import { IoShirtOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { TbCoinRupee } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";






const Footer =()=>{
    return(
        <footer>
        <div className="container">
            <div className="topInfo row">
                <div className=" col d-flex justify-content-center">
                    <span><IoShirtOutline /></span>
                    <p className="ml-2">Every Fresh Product</p>
                </div>
                <div className=" col d-flex justify-content-center">
                    <span><TbTruckDelivery /></span>
                    <p className="ml-2">
                    Free delivery for order over $70</p>
                </div>
                <div className=" col d-flex justify-content-center">
                    <span><CiDiscount1 /></span>
                    <p className="ml-2">Daily Mega Discounts</p>
                </div>
                <div className=" col d-flex justify-content-center">
                    <span><TbCoinRupee /></span>
                    <p className="ml-2">Best price on the market</p>
                </div>
            </div>


            <div className="row mt-5 linksWrap">
                <div className="col">
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs & Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts & Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Breakfast & Dairy</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs & Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts & Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>MEAT & SEAFOOD</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs & Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts & Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Beverages</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs & Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts & Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Breads & Bakery</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs & Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts & Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>
            </div>


            <div className="copywrite  mt-5 mb-2 d-flex justify-content-center">
                <p>Copyright © 2024 Sellfy. All rights reserved. Powered by Pritam</p>
                <ul className="list list-inline ml-auto mb-0">
                    <li className="list-inline-item"><Link to="https://www.facebook.com/"><FaFacebook /></Link></li>
                    <li className="list-inline-item"><Link to="https://www.linkedin.com/in/pritam-awatade/"><BsLinkedin /></Link></li>
                    <li className="list-inline-item"><Link to="https://www.linkedin.com/in/pritam-awatade/"><BsTwitterX /></Link></li>
                    <li className="list-inline-item"><Link to="https://github.com/Pritamawatade"><FaGithub/></Link></li>
                </ul>
            </div>



        </div>
        </footer>
    )
}

export default Footer