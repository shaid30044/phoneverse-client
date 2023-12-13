import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse</title>
      </Helmet>

      <Navbar />
    </div>
  );
};

export default Home;
