import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";

const ReadMore = () => {
  const blog = useLoaderData();

  console.log(blog);

  return (
    <div>
      <Helmet>
        <title>Phone Verse</title>
      </Helmet>

      <Navbar />
      <div>{blog.title}</div>
      <Footer />
    </div>
  );
};

export default ReadMore;
