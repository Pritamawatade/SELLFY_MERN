import React from 'react'

import Sidebar from '../../../Component/Sidebar'
import { Link } from 'react-router-dom'
import rightbanner from "../../../assets/images/rightbanner.png"

function Listing() {
  return (
    <>
        <section className="product_listing_page">
            <div className="container">
                <div className=" product_listing d-flex">
                    <Sidebar />

                    <div className="content_right">
                      <Link to="/productdetail"> <img src={rightbanner} alt=""/> </Link>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Listing