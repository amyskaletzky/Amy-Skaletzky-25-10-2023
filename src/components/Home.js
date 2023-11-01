import AutoCompleteSearch from "./AutoCompleteSearch";
import NavBar from "./NavBar";
import day from '../assets/clouds-sun.mp4';
import CurrentWeather from "./CurrentWeather";
import FiveDayForecast from "./FiveDaysForecast";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = (props) => {
    const cityCurrentWeather = useSelector(state => state.obj)
    const city = useSelector(state => state.city)
    return (

        <div className="relative lg:h-screen flex justify-center items-center py-10">
            <div className="flex flex-col w-11/12 h-full">

                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src={day}
                        type="video/mp4"
                    />
                </video>
                <div className="relative z-10 flex flex-col h-full gap-4">
                    <NavBar />
                    <div className="flex flex-col justify-between w-full h-full gap-4">
                        <CurrentWeather />
                        <FiveDayForecast />


                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home;