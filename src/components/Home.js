import AutoCompleteSearch from "./AutoCompleteSearch";
import NavBar from "./NavBar";
import cloudySun from '../assets/clouds-sun.mp4'
import CurrentWeather from "./CurrentWeather";
import FiveDayForcast from "./FiveDaysForcast";

const Home = (props) => {
    return (
        <div className="relative h-screen flex justify-center items-center">
            <div className="w-3/4 h-5/6 bg-red-700">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={cloudySun} type="video/mp4" />
                </video>
                <div className="relative z-10 flex flex-col h-full">
                    <NavBar />
                    <h1 className="text-slate-100">Home</h1>
                </div>
                <CurrentWeather />
                {/* <FiveDayForcast /> */}
            </div>
        </div>

        // <div className="p-4 b">
        //     <video autoplay loop muted className="w-full h-full object-cover absolute">
        //         <source src="../assets/clouds-sun.mkv" type="video/mp4" />
        //     </video>
        //     <div className="flex flex-col w-full h-screen">
        //         <input type="text" />
        //         <NavBar />
        //         <div>
        //             <h1 className="text-slate-100">Home</h1>
        //             <AutoCompleteSearch />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home;