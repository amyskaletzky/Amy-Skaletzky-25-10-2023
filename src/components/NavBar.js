import searchIcon from "../assets/search-icon.svg"
import { Link } from "react-router-dom";
import AutoCompleteSearch from "./AutoCompleteSearch";

const NavBar = (props) => {
    return (
        <div className="flex gap-4 w-full justify-center h-10 items-center">
            <AutoCompleteSearch />
            <Link to="/favourites" className="w-1/5 h-full flex items-center justify-center  bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25" > <p className=" opacity-100 text-lg ">Favourites</p></Link>
            <Link to="/" className="w-1/5 h-full flex items-center justify-center  bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25"><p className=" opacity-100 text-lg ">Home</p></Link>
        </div>
    )
}

export default NavBar;