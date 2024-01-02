import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import BrandsLogo from "../Components/Home/BrandsLogo";
import Slider from "../Components/Home/Slider";
import PopularBlogs from "../Components/Home/PopularBlogs";
import LatestPhones from "../Components/Home/LatestPhones";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse</title>
      </Helmet>

      <Navbar />
      <Slider />
      <LatestPhones />
      <PopularBlogs />
      <BrandsLogo />
      <Footer />
    </div>
  );
};

export default Home;
