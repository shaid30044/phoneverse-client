import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Phones = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse | Phones</title>
      </Helmet>

      <Navbar />
      <Footer />
    </div>
  );
};

export default Phones;
