import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center">
                    <div className="col-xs-3 ">
                        <Link to="/" className="d-flex align-items-center logo" >
                            <img style={{ width: '76px' }} src="https://bloggingx.com/wp-content/uploads/2021/11/sellfy-logo.png" alt="" srcset="" />
                            
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;