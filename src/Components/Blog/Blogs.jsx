import axios from "axios";
import { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./blog.json");
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-past px-2 md:px-10 lg:px-20 py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-2 sm:p-6">
        {blog.map((blog, idx) => (
          <div key={idx}>
            <img src={blog.image} alt="image" />
            <div className="flex justify-between items-center pr-1 pt-1">
              <p className="text-black/70">{blog.date}</p>
              <p className="flex items-center gap-1 text-black/70">
                <span>
                  <FaRegEye />
                </span>
                {blog.views}k
              </p>
            </div>

            <h3 className="text-xl font-medium pt-1">{blog.title}</h3>
            <p>
              {blog.content.introduction.slice(0, 150)}...{" "}
              <span>
                <button className="btn btn-sm normal-case text-base font-medium text-primary hover:text-white bg-transparent hover:bg-primary border-none shadow-none rounded-none duration-300 px-2">
                  Read more
                </button>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
