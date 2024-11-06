import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center">
                    <div className="col-xs-3 ">
                        <Link to="/" className="d-flex align-items-center logo">

                        </Link>

                    </div>
                </div>
            </div>
        </header>
    )
}
// TODO video at 15 min
export default Header;