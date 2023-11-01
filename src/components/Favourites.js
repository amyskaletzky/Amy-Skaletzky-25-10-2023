import NavBar from "./NavBar";
import cloudySun from "../assets/clouds-sun.mp4"
import useLocalStorage from '../hooks/useLocalStorage';
import { Favourite } from "./Favourite";
const Favourites = (props) => {

    const [favourites, setFavourites] = useLocalStorage('favourites', []);
    return (
        <div className="relative h-screen flex justify-center items-center">
            <div className="flex flex-col w-3/4 h-5/6  ">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={cloudySun} type="video/mp4" />
                </video>
                <div className="relative z-10 flex flex-col h-full  gap-4">
                    <NavBar />
                    <div className="flex flex-col justify-between w-full h-full gap-4">
                        <div id="bottom" className="h-1/2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50">
                            {favourites.length > 0 ? favourites.map((favourite) => (
                                <Favourite cityName={favourite?.cityName} cityKey={favourite?.cityKey} />
                            )) : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favourites;