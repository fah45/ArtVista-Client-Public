import { useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import CraftCard from "./CraftCard";


const Home = () => {

    const crafts = useLoaderData();

    console.log(crafts)



    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl">craft craft: {crafts.item}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                crafts.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
            }
            </div>
            <About></About>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;