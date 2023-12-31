import NavBar from "./NavBar";
import cloudySun from "../assets/clouds-sun.mp4"
import useLocalStorage from '../hooks/useLocalStorage';
import { Favourite } from "./Favourite";
const Favourites = (props) => {

    const [favourites, setFavourites] = useLocalStorage('favourites', []);
    return (
        <div className="relative lg:h-screen flex justify-center items-center py-10">
            <div className="flex flex-col w-11/12 h-full ">
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
                    <div className="flex flex-col justify-between w-full h-full gap-4 ">
                        <div id="bottom" className="flex flex-wrap justify-center gap-8 py-8 px-8 h-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50">
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