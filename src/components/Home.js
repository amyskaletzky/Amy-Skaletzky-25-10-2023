import AutoCompleteSearch from "./AutoCompleteSearch";
import NavBar from "./NavBar";

const Home = (props) => {
    return (
        <div className="p-4">
            <div className="flex flex-col w-full h-screen">
                <NavBar />
                <div>
                    <h1 className="text-slate-100">Home</h1>
                    <AutoCompleteSearch />
                </div>
            </div>
        </div>
    )
}

export default Home;