import useBlogs from "../../Hooks/useBlogs";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineBookmarks } from "react-icons/md";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Title from "../../Shared/Title";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const PopularBlogs = () => {
  const [blogs] = useBlogs();

  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    const sortedBlogs = blogs.sort((a, b) => b.views - a.views);

    const top10Blogs = sortedBlogs.slice(0, 6);

    setPopularBlogs((prevTop10Blogs) => {
      if (JSON.stringify(prevTop10Blogs) !== JSON.stringify(top10Blogs)) {
        return top10Blogs;
      }
      return prevTop10Blogs;
    });
  }, [blogs]);

  return (
    <div className="px-2 sm:px-10 xl:px-20 py-20">
      <Title title={"Popular Blogs"} />

      <div className="md:hidden">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mt-10"
        >
          {popularBlogs.map((popular, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <img src={popular.image} alt={popular.title} className="w-full" />

              <div className="mt-1 px-1">
                <div className="flex justify-between items-center text-xs sm:text-sm pb-1">
                  <p>{popular.date}</p>

                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-1">
                      <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                        <FaRegHeart />
                      </p>
                      <span>
                        {popular.views >= 1000 ? (
                          <span>{(popular.views / 1000).toFixed(1)}k</span>
                        ) : (
                          <span>{popular.views}</span>
                        )}
                      </span>
                    </div>

                    <p className="hover:text-primary duration-500 cursor-pointer">
                      <MdOutlineBookmarks />
                    </p>
                  </div>
                </div>

                <Link to={`/blogs/${popular._id}`}>
                  <span className="sm:text-lg font-medium hover:text-primary duration-300">
                    {popular.title}
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mt-10"
        >
          {popularBlogs.map((popular, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <img src={popular.image} alt={popular.title} className="w-full" />

              <div className="mt-1 px-1">
                <div className="flex justify-between items-center text-sm lg:text-base pb-1">
                  <p>{popular.date}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                        <FaRegHeart />
                      </p>
                      <span>
                        {popular.views >= 1000 ? (
                          <span>{(popular.views / 1000).toFixed(1)}k</span>
                        ) : (
                          <span>{popular.views}</span>
                        )}
                      </span>
                    </div>

                    <p className="hover:text-primary duration-500 cursor-pointer">
                      <MdOutlineBookmarks />
                    </p>
                  </div>
                </div>

                <Link to={`/blogs/${popular._id}`}>
                  <span className="lg:text-lg font-medium hover:text-primary duration-300">
                    {popular.title}
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularBlogs;
