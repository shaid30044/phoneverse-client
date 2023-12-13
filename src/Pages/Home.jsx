import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse</title>
      </Helmet>

      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
