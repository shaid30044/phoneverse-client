import usePhones from "../../Hooks/usePhones";
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

const LatestPhones = () => {
  const [phones] = usePhones();

  const [latestPhones, setLatestPhones] = useState([]);

  useEffect(() => {
    const sortedPhones = phones.sort(
      (a, b) => new Date(b.announced) - new Date(a.announced)
    );

    const top10Phones = sortedPhones.slice(0, 10).map((phone) => {
      const formattedDate = new Date(phone.announced).toLocaleDateString(
        "en-US",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      return {
        ...phone,
        formattedDate,
      };
    });

    setLatestPhones((prevTop10Phones) => {
      if (JSON.stringify(prevTop10Phones) !== JSON.stringify(top10Phones)) {
        return top10Phones;
      }
      return prevTop10Phones;
    });
  }, [phones]);

  return (
    <div className="px-2 sm:px-10 xl:px-20 pt-20">
      <Title title={"Latest Phones"} />

      <div className="md:hidden">
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
          {latestPhones.map((latest, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <div className="h-36">
                <img
                  src={latest.image}
                  alt={latest.name}
                  className="max-h-36"
                />
              </div>
              <div className="mt-1 px-1">
                <Link to={`/phones/${latest._id}`}>
                  <span className="text-sm font-medium hover:text-primary duration-300">
                    {latest.name}
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block">
        <Swiper
          slidesPerView={6}
          spaceBetween={40}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mt-10"
        >
          {latestPhones.map((latest, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <div className="h-56">
                <img
                  src={latest.image}
                  alt={latest.name}
                  className="max-h-56"
                />
              </div>

              <div className="mt-2 px-1">
                <Link to={`/phones/${latest._id}`}>
                  <span className="lg:text-lg font-medium hover:text-primary duration-300">
                    {latest.name}
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

export default LatestPhones;
