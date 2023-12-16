import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineBookmarks, MdBookmarks } from "react-icons/md";
import Select from "react-select";

const options = [
  { value: "default", label: "Default" },
  { value: "recent", label: "Recent" },
  { value: "old", label: "Old" },
  { value: "mostViews", label: "Most Views" },
  { value: "lessViews", label: "Less Views" },
];

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState(options[0]);

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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  const filterAndSortBlogs = () => {
    let filteredBlogs = blog.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );

    switch (sortOption.value) {
      case "recent":
        filteredBlogs = filteredBlogs.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;

      case "old":
        filteredBlogs = filteredBlogs.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        break;

      case "mostViews":
        filteredBlogs = filteredBlogs.sort((a, b) => b.views - a.views);
        break;

      case "lessViews":
        filteredBlogs = filteredBlogs.sort((a, b) => a.views - b.views);
        break;

      default:
        break;
    }

    return filteredBlogs;
  };

  const filteredAndSortedBlogs = filterAndSortBlogs();

  return (
    <div className="bg-past px-2 md:px-10 lg:px-20 pt-6 pb-20">
      <div className="flex justify-between items-center sm:gap-6 lg:gap-8 xl:gap-10 bg-white mb-4 p-4">
        <div className="hidden sm:block w-60">
          <Select
            options={options}
            value={sortOption}
            onChange={handleSortChange}
          />
        </div>

        <div className="w-full">
          <form>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Phone"
              value={search}
              onChange={handleSearchChange}
              className="border-2 outline-none rounded-md w-full px-5 py-2"
            />
          </form>
        </div>
      </div>

      <div className="sm:hidden bg-white w-full p-4">
        <div className="w-40">
          <Select
            options={options}
            value={sortOption}
            onChange={handleSortChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-6 bg-white p-2 sm:p-6">
        {filteredAndSortedBlogs.map((blog, idx) => (
          <div key={idx}>
            <img src={blog.image} alt="image" />

            <div className="flex justify-between items-center pr-1 pt-1">
              <p className="text-black/70">{blog.date}</p>

              <div className="flex items-center gap-5">
                <p className="flex items-center gap-1 text-black/70">
                  <span>
                    <FaRegEye />
                  </span>
                  {blog.views}k
                </p>

                <button className="btn btn-sm text-base hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out hover:scale-125 px-0">
                  <MdOutlineBookmarks />
                </button>
              </div>
            </div>

            <h3 className="text-xl font-medium py-1">{blog.title}</h3>
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
