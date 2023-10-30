import AutoCompleteSearch from "./AutoCompleteSearch";
import NavBar from "./NavBar";
import cloudySun from '../assets/clouds-sun.mp4'
import CurrentWeather from "./CurrentWeather";
import FiveDayForcast from "./FiveDaysForcast";
import { useSelector, useDispatch } from 'react-redux';


const Home = (props) => {
    const city = useSelector(state => state.city)
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
                        <CurrentWeather />
                        {/* <FiveDayForcast /> */}

                        <div id="bottom" className="h-1/2 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;