import searchIcon from "../assets/search-icon.svg"
import { Link } from "react-router-dom";
import AutoCompleteSearch from "./AutoCompleteSearch";

const NavBar = (props) => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full justify-center h-fit lg:h-10 items-center">
            <AutoCompleteSearch />
            <div className="lg:w-2/5 w-full flex gap-4 h-full">
                <Link to="/favourites" className="w-1/2 h-10 flex items-center justify-center  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50 medium" > <p className=" opacity-100 text-lg ">Favourites</p></Link>
                <Link to="/" className="w-1/2 h-10 flex items-center justify-center  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50 medium"><p className=" opacity-100 text-lg ">Home</p></Link>
            </div>
        </div>
    )
}

export default NavBar;