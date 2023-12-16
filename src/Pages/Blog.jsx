import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse | Blog</title>
      </Helmet>

      <Navbar />
      <Footer />
    </div>
  );
};

export default Blog;
