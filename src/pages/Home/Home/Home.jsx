import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Stats from "../Stats/Stats";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;