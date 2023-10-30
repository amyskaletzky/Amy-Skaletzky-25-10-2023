
const NavBar = (props) => {
    return (
        <div className="flex gap-4 justify-center">
            {/* <h1 className=" text-slate-100 text-3xl font-bold">Abra Weather App</h1> */}
            <div className=" w-8/12 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"></div>
            <a>Home</a>
            <a>Favourites</a>
        </div>
    )
}

export default NavBar;