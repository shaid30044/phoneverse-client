import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import AllPhones from "../Components/Phones/AllPhones";

const Phones = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse | Phones</title>
      </Helmet>

      <Navbar />

      <div className="bg-past px-4 md:px-10 lg:px-20 py-20">
        <AllPhones />
      </div>

      <Footer />
    </div>
  );
};

export default Phones;
