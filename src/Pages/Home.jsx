import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import BrandsLogo from "../Components/Home/BrandsLogo";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse</title>
      </Helmet>

      <Navbar />
      <BrandsLogo />
      <Footer />
    </div>
  );
};

export default Home;
