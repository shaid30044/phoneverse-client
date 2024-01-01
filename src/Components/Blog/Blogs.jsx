import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import {
  MdOutlineBookmarks,
  // MdBookmarks,
  MdArrowForwardIos,
  MdArrowBackIosNew,
} from "react-icons/md";
import Select from "react-select";
import NotFound from "../../Shared/NotFound";
import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";

const options = [
  { value: "recent", label: "Recent" },
  { value: "old", label: "Old" },
  { value: "mostPopular", label: "Most Popular" },
  { value: "leastPopular", label: "Least Popular" },
];

const pageOptions = [
  { value: 5, label: "5 items per page" },
  { value: 10, label: "10 items per page" },
  { value: 20, label: "20 items per page" },
  { value: 50, label: "50 items per page" },
  { value: 100, label: "100 items per page" },
];

const Blogs = () => {
  const [blogs] = useBlogs();
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState(options[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageOptions[1].value);

  const categories = [
    { value: "all", label: "All Categories" },
    ...[...new Set(blogs.map((blog) => blog.category))].map((category) => ({
      value: category,
      label: category,
    })),
  ];

  const [categoryFilter, setCategoryFilter] = useState(categories[0]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (selectedOption) => {
    setCategoryFilter(selectedOption);
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  const filterAndSortBlogs = () => {
    let filteredBlogs = blogs.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );

    if (categoryFilter.value !== "all") {
      filteredBlogs = filteredBlogs.filter(
        (b) => b.category === categoryFilter.value
      );
    }

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

      case "mostPopular":
        filteredBlogs = filteredBlogs.sort((a, b) => b.views - a.views);
        break;

      case "leastPopular":
        filteredBlogs = filteredBlogs.sort((a, b) => a.views - b.views);
        break;
    }

    return filteredBlogs;
  };

  const filteredAndSortedBlogs = filterAndSortBlogs();

  // sort mobiles

  const sortedMobiles = [...filteredAndSortedBlogs];

  const indexOfLastMobile = currentPage * itemsPerPage;
  const indexOfFirstMobile = indexOfLastMobile - itemsPerPage;
  const currentMobiles = sortedMobiles.slice(
    indexOfFirstMobile,
    indexOfLastMobile
  );

  const handlePageChange = (pageNumber, itemsPerPage) => {
    if (
      pageNumber < 1 ||
      pageNumber > Math.ceil(filteredAndSortedBlogs.length / itemsPerPage)
    ) {
      return;
    }

    setCurrentPage(pageNumber);
    setItemsPerPage(itemsPerPage);
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredAndSortedBlogs.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-past px-2 md:px-10 lg:px-20 pt-6 pb-20">
      <div className="bg-white w-full mb-4 p-4">
        <form>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Blog Here..."
            value={search}
            onChange={handleSearchChange}
            className="border-2 outline-none rounded-md w-full px-5 py-2"
          />
        </form>
      </div>

      <div className="flex flex-col justify-between gap-4 bg-white px-4 pt-4">
        <div className="flex justify-between gap-4">
          {/* sort by option */}

          <div className="w-1/2 sm:w-1/3">
            <Select
              options={options}
              value={sortOption}
              onChange={handleSortChange}
            />
          </div>

          {/* sort by category */}

          <div className="hidden sm:block w-1/3">
            <Select
              options={categories}
              value={categoryFilter}
              onChange={handleCategoryChange}
            />
          </div>

          {/* sort by item */}

          <div className="w-1/2 sm:w-1/3">
            <Select
              options={pageOptions}
              value={pageOptions.find(
                (option) => option.value === itemsPerPage
              )}
              onChange={(selectedOption) =>
                setItemsPerPage(selectedOption.value)
              }
            />
          </div>
        </div>

        {/* sort by category */}

        <div className="sm:hidden w-full">
          <Select
            options={categories}
            value={categoryFilter}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      <div className="bg-white pt-4">
        {currentMobiles.length === 0 ? (
          <div className="flex justify-center items-center pt-10">
            <NotFound />
          </div>
        ) : (
          <div className="example grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-4 bg-white h-screen overflow-x-hidden overflow-y-scroll px-4">
            {currentMobiles.map((blog, idx) => (
              <div key={idx}>
                <div className="relative overflow-hidden flex justify-center items-center bg-past bg-cover bg-no-repeat">
                  <img
                    src={blog.image}
                    className="transition duration-500 ease-in-out hover:scale-110"
                  />
                </div>

                <div className="flex justify-between items-center pr-1 pt-1">
                  <p className="text-black/70">{blog.date}</p>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1 text-black/70">
                      <p className="hover:text-primary duration-500 cursor-pointer">
                        <FaRegHeart />
                      </p>
                      {blog.views >= 1000 ? (
                        <span>{(blog.views / 1000).toFixed(1)}k</span>
                      ) : (
                        <span>{blog.views}</span>
                      )}
                    </div>

                    <p className="hover:text-primary duration-500 cursor-pointer">
                      <MdOutlineBookmarks />
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-medium py-1">{blog.title}</h3>
                <p>
                  <span className="pr-1">
                    {blog.content.introduction.slice(0, 150)}...
                  </span>
                  <Link to={`/blogs/${blog._id}`}>
                    <span className="font-medium text-primary duration-300">
                      Read more
                    </span>
                  </Link>
                </p>
              </div>
            ))}
          </div>
        )}

        {/* pagination buttons */}

        <div className="flex justify-center items-center gap-4 sm:gap-8 p-4">
          <p
            className="flex justify-center items-center text-sm rounded-full bg-past hover:bg-primary text-black hover:text-white duration-300 cursor-pointer w-5 h-5 px-1"
            onClick={() => handlePageChange(currentPage - 1, itemsPerPage)}
            disabled={currentPage === 1}
          >
            <MdArrowBackIosNew />
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {pageNumbers.map((number) => (
              <p
                key={number}
                onClick={() => handlePageChange(number, itemsPerPage)}
                className={`flex justify-center items-center rounded-full w-5 h-5 px-2 ${
                  number === currentPage
                    ? "bg-primary hover:bg-primary text-sm font-medium text-white cursor-pointer"
                    : "bg-past hover:bg-primary text-sm font-medium hover:text-white text-black duration-300 cursor-pointer"
                }`}
              >
                {number}
              </p>
            ))}
          </div>

          <p
            className="flex justify-center items-center text-sm rounded-full bg-past hover:bg-primary text-black hover:text-white duration-300 cursor-pointer w-5 h-5 px-1"
            onClick={() => handlePageChange(currentPage + 1, itemsPerPage)}
            disabled={currentPage === pageNumbers.length}
          >
            <MdArrowForwardIos />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
