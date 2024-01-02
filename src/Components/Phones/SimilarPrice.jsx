import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Title from "../../Shared/Title";
import usePhones from "../../Hooks/usePhones";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SimilarPrice = ({ id, price }) => {
  const [phones] = usePhones();

  const similarPrice = phones.filter(
    (similar) =>
      similar.price >= price - 50 &&
      similar.price <= price + 50 &&
      similar._id !== id
  );

  return (
    <div>
      <Title title={"Similarly Priced"} />

      <div className="scrollbarHide hidden sm:flex flex-col gap-8 overflow-y-scroll max-h-[70vh] mt-6">
        {similarPrice.map((similar, idx) => (
          <div key={idx} className="md:flex items-center gap-4">
            <img
              src={similar.image}
              alt={similar.name}
              className="w-full md:w-1/3"
            />

            <div className="md:w-2/3 mt-1 px-1">
              <Link
                to={`/phone/${similar._id}`}
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
          {similarPrice.map((similar, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <div className="h-44">
                <img
                  src={similar.image}
                  alt={similar.name}
                  className="max-h-44"
                />
              </div>

              <div className="mt-2 px-1">
                <p className="text-sm">${similar.price}</p>

                <Link to={`/phone/${similar._id}`}>
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

export default SimilarPrice;
