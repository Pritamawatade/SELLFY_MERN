import { IoSearchOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

const SearchBox = () => {
    return(
        <div className="headerSearch ml-3 mr-3">
        <input type="text" placeholder="Search for products" />
        <Button>
          <IoSearchOutline />
        </Button>
        
        
      </div>
    )
}

export default SearchBox