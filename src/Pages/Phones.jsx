import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Filter from "../Components/Phones/Filter";

const Phones = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse | Phones</title>
      </Helmet>

      <Navbar />

      <div className="bg-past px-4 md:px-10 lg:px-20 py-6">
        <Filter />
      </div>

      <Footer />
    </div>
  );
};

export default Phones;
