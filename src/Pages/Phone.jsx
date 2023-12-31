import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();

  console.log(phone);

  return (
    <div>
      <Helmet>
        <title>Phone Verse | </title>
      </Helmet>

      <Navbar />

      <div></div>

      <Footer />
    </div>
  );
};

export default Phone;
