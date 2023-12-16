import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Blogs from "../Components/Blog/Blogs";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Verse | Blog</title>
      </Helmet>

      <Navbar />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Blog;
