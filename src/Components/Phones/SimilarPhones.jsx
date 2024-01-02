import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Title from "../../Shared/Title";
import usePhones from "../../Hooks/usePhones";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SimilarPhones = ({ id, brand }) => {
  const [phones] = usePhones();

  const similarPhones = phones.filter(
    (similar) => similar.brand === brand && similar._id !== id
  );

  return (
    <div>
      <Title title={"Related Phones"} />

      <div className="scrollbarHide hidden sm:flex flex-col gap-8 overflow-y-scroll max-h-[60vh] mt-6">
        {similarPhones.map((similar, idx) => (
          <div key={idx} className="md:flex items-center gap-4">
            <img
              src={similar.image}
              alt={similar.name}
              className="w-full md:w-1/3"
            />

            <div className="md:w-2/3 mt-1 px-1">
              <Link
                to={`/blogs/${similar._id}`}
                className="md:text-sm lg:text-lg font-medium"
              >
                <span className="hover:text-primary duration-300">
                  {similar.name}
                </span>
              </Link>

              <p className="text-sm lg:text-base">
                Price: $<span>{similar.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mt-10"
        >
          {similarPhones.map((similar, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <img src={similar.image} alt={similar.name} className="w-full" />

              <div className="mt-1 px-1">
                <p className="text-sm">${similar.price}</p>

                <Link to={`/blogs/${similar._id}`}>
                  <span className="text-sm font-medium hover:text-primary duration-300">
                    {similar.name}
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

export default SimilarPhones;
