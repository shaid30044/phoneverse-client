import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";
// import { FaRegHeart /*FaHeart*/ } from "react-icons/fa6";
// import { IoGitCompareOutline /*IoGitCompare*/ } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Phone = () => {
  const phone = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Phone Verse | {phone.name}</title>
      </Helmet>

      <Navbar />

      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-10 md:px-20 xl:px-40 pt-10 pb-20">
        <div className="sm:w-2/3">
          <div className="pb-4 lg:pb-4">
            <p className="text-xl font-medium mb-10">
              <span className="border-b-2 border-primary pb-1">
                Brand: <span className="text-primary">{phone.brand}</span>
              </span>
            </p>

            <div className="lg:flex items-center gap-6 xl:gap-10">
              <h3 className="text-2xl font-semibold text-black/80 lg:order-last lg:w-2/5 mb-4 lg:mb-[12.5%]">
                {phone.name}
              </h3>

              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                emulateTouch={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={50}
                transitionTime={500}
                className="text-center lg:w-3/5"
              >
                {phone.image.map((img, idx) => (
                  <div key={idx} className="bg-past px-20 py-10">
                    <img src={img} alt={phone.name} className="w-full" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Phone;
