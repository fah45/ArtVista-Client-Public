import { useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import CraftCard from "./CraftCard";


const Home = () => {

    const crafts = useLoaderData();



    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl">craft craft: {crafts.item}</h2>
            {
                crafts.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
            }
            <About></About>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;