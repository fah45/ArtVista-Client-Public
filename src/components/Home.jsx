import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <h2 className="text-3xl"></h2>
        </div>
    );
};

export default Home;