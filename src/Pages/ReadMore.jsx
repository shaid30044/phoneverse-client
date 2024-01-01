import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import {
  MdOutlineBookmarks,
  // MdBookmarks,
} from "react-icons/md";
import SimilarBlogs from "../Components/Blog/SimilarBlogs";

const ReadMore = () => {
  const blog = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Phone Verse | {blog.title}</title>
      </Helmet>

      <Navbar />

      <div className="flex justify-between px-4 sm:px-10 md:px-20 xl:px-40 pb-20">
        <div className="sm:w-2/3">
          <div className="pb-4 lg:pb-4">
            <p className="text-xl font-medium mb-10">
              <span className="border-b-2 border-primary pb-1">
                Category:{" "}
                <span className="font-normal text-primary">
                  {blog.category}
                </span>
              </span>
            </p>

            <div className="lg:px-6">
              <h3 className="text-2xl font-semibold text-black/80">
                {blog.title}
              </h3>

              <div className="flex flex-wrap gap-4 pt-3 pb-2">
                {blog.tags.map((tags) => (
                  <p
                    key={tags}
                    className="text-xs font-medium text-primary bg-primary/10 px-2"
                  >
                    #{tags}
                  </p>
                ))}
              </div>

              <p className="text-sm font-medium text-black/60 italic">
                {blog.date}
              </p>
            </div>
          </div>

          <div className="relative mb-4">
            <img src={blog.image} alt={blog.title} className="w-full" />

            <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 flex flex-co items-center gap-3 lg:gap-4">
              <p className="text-sm lg:text-base hover:text-primary bg-past rounded-full duration-500 cursor-pointer p-1.5">
                <FaRegHeart />
              </p>

              <p className="text-sm lg:text-base hover:text-primary bg-past rounded-full duration-500 cursor-pointer p-1.5">
                <MdOutlineBookmarks />
              </p>
            </div>
          </div>

          <div className="text-black/60 font-medium text-justify space-y-4 lg:px-6">
            <p>{blog.content.introduction}</p>

            <div className="space-y-4">
              {blog.content.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <p>{blog.content.conclusion}</p>
          </div>
        </div>

        <div className="sm:w-1/3 pl-10 lg:pl-20">
          <SimilarBlogs id={blog._id} category={blog.category} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReadMore;
