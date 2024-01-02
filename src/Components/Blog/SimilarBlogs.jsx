import { FaRegHeart } from "react-icons/fa6";
import useBlogs from "../../Hooks/useBlogs";
import { MdOutlineBookmarks } from "react-icons/md";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Title from "../../Shared/Title";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SimilarBlogs = ({ id, category }) => {
  const [blogs] = useBlogs();

  const similarBlogs = blogs.filter(
    (similar) => similar.category === category && similar._id !== id
  );

  return (
    <div>
      <Title title={"Related Blogs"} />

      <div className="example hidden sm:flex flex-col gap-8 overflow-y-scroll max-h-[90vh] mt-6">
        {similarBlogs.map((similar, idx) => (
          <div key={idx}>
            <img src={similar.image} alt={similar.title} className="w-full" />

            <div className="mt-1 px-1">
              <div className="flex justify-between items-center text-xs lg:text-sm">
                <p>{similar.date}</p>

                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="flex items-center gap-1">
                    <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                      <FaRegHeart />
                    </p>
                    <span>
                      {similar.views >= 1000 ? (
                        <span>{(similar.views / 1000).toFixed(1)}k</span>
                      ) : (
                        <span>{similar.views}</span>
                      )}
                    </span>
                  </div>

                  <p className="hover:text-primary duration-500 cursor-pointer">
                    <MdOutlineBookmarks />
                  </p>
                </div>
              </div>

              <Link to={`/blogs/${similar._id}`}>
                <span className="lg:text-lg font-medium hover:text-primary duration-300">
                  {similar.title}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mt-10"
        >
          {similarBlogs.map((similar, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <img src={similar.image} alt={similar.title} className="w-full" />

              <div className="mt-1 px-1">
                <div className="flex justify-between items-center text-xs lg:text-sm">
                  <p>{similar.date}</p>

                  <div className="flex items-center gap-2 lg:gap-4">
                    <div className="flex items-center gap-1">
                      <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                        <FaRegHeart />
                      </p>
                      <span>
                        {similar.views >= 1000 ? (
                          <span>{(similar.views / 1000).toFixed(1)}k</span>
                        ) : (
                          <span>{similar.views}</span>
                        )}
                      </span>
                    </div>

                    <p className="hover:text-primary duration-500 cursor-pointer">
                      <MdOutlineBookmarks />
                    </p>
                  </div>
                </div>

                <Link to={`/blogs/${similar._id}`}>
                  <span className="lg:text-lg font-medium hover:text-primary duration-300">
                    {similar.title}
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

export default SimilarBlogs;
