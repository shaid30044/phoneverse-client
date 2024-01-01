import { FaRegHeart } from "react-icons/fa6";
import useBlogs from "../../Hooks/useBlogs";
import { MdOutlineBookmarks } from "react-icons/md";
import { Link } from "react-router-dom";

const OtherBlogs = ({ category }) => {
  const [blogs] = useBlogs();

  const otherBlogs = blogs.filter((other) => other.category !== category);

  return (
    <div>
      <h3 className="border-b-[3px] border-black/20 pb-1">
        <span className="text-2xl font-medium text-primary border-b-[3px] border-primary pb-1">
          Other Blogs
        </span>
      </h3>

      <div className="example flex flex-col gap-8 overflow-y-scroll max-h-[90vh] mt-6">
        {otherBlogs.map((other, idx) => (
          <div key={idx}>
            <img src={other.image} alt={other.title} className="w-full" />

            <div className="mt-1 px-1">
              <div className="flex justify-between items-center text-xs lg:text-sm">
                <p>{other.date}</p>

                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="flex items-center gap-1">
                    <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                      <FaRegHeart />
                    </p>
                    <span>
                      {other.views >= 1000 ? (
                        <span>{(other.views / 1000).toFixed(1)}k</span>
                      ) : (
                        <span>{other.views}</span>
                      )}
                    </span>
                  </div>

                  <p className="hover:text-primary duration-500 cursor-pointer">
                    <MdOutlineBookmarks />
                  </p>
                </div>
              </div>

              <Link to={`/blogs/${other._id}`}>
                <span className="lg:text-lg font-medium hover:text-primary duration-300">
                  {other.title}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
