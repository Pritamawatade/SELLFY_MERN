import { IoSearchOutline } from "react-icons/io5";


const SearchBox =  () =>{
    return (
        <div className="searchBox relative d-flex align-items-center">
            <IoSearchOutline />
            <input type="text" placeholder="Search here....." />
        </div>
    )
}

export default SearchBox