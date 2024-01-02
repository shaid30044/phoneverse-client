import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";
// import { FaRegHeart /*FaHeart*/ } from "react-icons/fa6";
// import { IoGitCompareOutline /*IoGitCompare*/ } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "../Shared/Title";
import usePhones from "../Hooks/usePhones";
import SimilarPhones from "../Components/Phones/SimilarPhones";

const Phone = () => {
  const phone = useLoaderData();
  const [phones] = usePhones();

  const similarBlogs = phones.filter(
    (b) => b.category === phone.category && b._id !== phone._id
  );

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

            <div className="lg:flex items-center gap-6 xl:gap-8">
              <div className="lg:order-last lg:w-2/5 mb-4 lg:mb-[12.5%]">
                <h3 className="text-2xl font-semibold text-black/80">
                  {phone.name}
                </h3>

                <p className="text-lg font-medium mt-2">
                  Price: $<span>{phone.price}</span>
                </p>
              </div>

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

          <div>
            <h3 className="text-4xl font-medium text-center mt-10 mb-6">
              Specification
            </h3>

            <div className="text-sm sm:text-base">
              {/* date */}

              <div className="mb-10">
                <Title title={"Date"} />

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">Announced:</p>
                  <p className="w-2/3">{phone.announced}</p>
                </div>
              </div>

              {/* display */}

              <div className="mb-10">
                <Title title={"Display"} />

                {/* main */}

                <p className="text-xl font-medium underline underline-offset-4 mt-4">
                  Main
                </p>

                {/* type */}

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">Type:</p>
                  <p className="w-2/3">{phone.display.main.technology}</p>
                </div>

                {/* size */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Size:</p>
                  <p className="w-2/3">{phone.display.main.size}</p>
                </div>

                {/* resolution */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Resolution:</p>
                  <p className="w-2/3">{phone.display.main.resolution}</p>
                </div>

                {/* refresh rate */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Refresh Rate:</p>
                  <p className="w-2/3">{phone.display.main.refresh_rate}Hz</p>
                </div>

                {/* peak brightness */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Peak Brightness:</p>
                  <p className="w-2/3">
                    {phone.display.main.peak_brightness}nits
                  </p>
                </div>

                {phone.display.cover ? (
                  <div>
                    {/* cover */}

                    <p className="text-xl font-medium underline underline-offset-4 mt-4">
                      Cover
                    </p>

                    {/* type */}

                    <div className="flex sm:text-lg mt-4">
                      <p className="font-medium w-1/3">Type:</p>
                      <p className="w-2/3">{phone.display.cover?.technology}</p>
                    </div>

                    {/* size */}

                    <div className="flex sm:text-lg mt-1">
                      <p className="font-medium w-1/3">Size:</p>
                      <p className="w-2/3">{phone.display.cover?.size}</p>
                    </div>

                    {/* resolution */}

                    <div className="flex sm:text-lg mt-1">
                      <p className="font-medium w-1/3">Resolution:</p>
                      <p className="w-2/3">{phone.display.cover?.resolution}</p>
                    </div>

                    {/* refresh rate */}

                    <div className="flex sm:text-lg mt-1">
                      <p className="font-medium w-1/3">Refresh Rate:</p>
                      <p className="w-2/3">
                        {phone.display.cover?.refresh_rate}Hz
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* platform */}

              <div className="mb-10">
                <Title title={"Processor"} />

                {/* os */}

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">OS:</p>
                  <p className="w-2/3">{phone.operating_system}</p>
                </div>

                {/* processor */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">SoC:</p>
                  <p className="w-2/3">{phone.processor}</p>
                </div>
              </div>

              {/* memory */}

              <div className="mb-10">
                <Title title={"Memory"} />

                {/* capacity */}

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">Capacity:</p>
                  <p className="flex gap-4 w-2/3">
                    {phone.ram.capacity.map((capacity) => (
                      <span key={capacity}>{capacity}GB</span>
                    ))}
                  </p>
                </div>

                {/* type */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Type:</p>
                  <p className="flex gap-4 w-2/3">{phone.ram.type}</p>
                </div>
              </div>

              {/* storage */}

              <div className="mb-10">
                <Title title={"Storage"} />

                {/* capacity */}

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">Capacity:</p>
                  <p className="flex gap-4 w-2/3">
                    {phone.storage.capacity.map((capacity) => (
                      <span key={capacity}>
                        {capacity === 1 ? (
                          <span>1TB</span>
                        ) : (
                          <span>{capacity}GB</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                {/* type */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Type:</p>
                  <p className="flex gap-4 w-2/3">{phone.storage.type}</p>
                </div>
              </div>

              {/* camera */}

              <div className="mb-10">
                <Title title={"Camera"} />

                {/* rear */}

                <p className="text-xl font-medium underline underline-offset-4 mt-4">
                  Rear
                </p>

                {/* main */}

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">Main:</p>
                  <p className="w-2/3">{phone.camera.rear?.main}</p>
                </div>

                {/* ultrawide */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Ultrawide:</p>
                  <p className="w-2/3">{phone.camera.rear?.ultrawide}</p>
                </div>

                {/* telephoto */}

                {phone.camera.rear?.telephoto ? (
                  <div className="flex sm:text-lg mt-1">
                    <p className="font-medium w-1/3">Telephoto:</p>
                    <p className="w-2/3">{phone.camera.rear?.telephoto}</p>
                  </div>
                ) : (
                  ""
                )}

                {/* telephoto 1 */}

                {phone.camera.rear?.telephoto1 ? (
                  <div className="flex sm:text-lg mt-1">
                    <p className="font-medium w-1/3">Telephoto 1:</p>
                    <p className="w-2/3">{phone.camera.rear?.telephoto1}</p>
                  </div>
                ) : (
                  ""
                )}

                {/* telephoto 2 */}

                {phone.camera.rear?.telephoto2 ? (
                  <div className="flex sm:text-lg mt-1">
                    <p className="font-medium w-1/3">Telephoto 2:</p>
                    <p className="w-2/3">{phone.camera.rear?.telephoto2}</p>
                  </div>
                ) : (
                  ""
                )}

                {/* front */}

                <p className="text-xl font-medium underline underline-offset-4 mt-4">
                  Front
                </p>

                {/* main */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Main:</p>
                  <p className="w-2/3">{phone.camera.front?.main}</p>
                </div>

                {/* under display */}

                {phone.camera.rear?.under_display ? (
                  <div className="flex sm:text-lg mt-1">
                    <p className="font-medium w-1/3">Under Display:</p>
                    <p className="w-2/3">{phone.camera.rear?.under_display}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* battery */}

              <div className="mb-10">
                <Title title={"Battery"} />

                {/* capacity */}

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">Main:</p>
                  <p className="w-2/3">{phone.battery.capacity}mAh</p>
                </div>

                {/* fast charging */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Fast Charging:</p>
                  <p className="w-2/3">{phone.battery.fast_charging}</p>
                </div>

                {/* wireless charging */}

                {phone.battery.wireless_charging ? (
                  <div className="flex sm:text-lg mt-1">
                    <p className="font-medium w-1/3">Wireless Charging:</p>
                    <p className="w-2/3">{phone.battery.wireless_charging}</p>
                  </div>
                ) : (
                  ""
                )}

                {/* magsafe charging */}

                {phone.battery.magsafe_charging ? (
                  <div className="flex sm:text-lg mt-1">
                    <p className="font-medium w-1/3">Magsafe Charging:</p>
                    <p className="w-2/3">{phone.battery.magsafe_charging}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* features */}

              <div className="mb-10">
                <Title title={"Features"} />

                {/* security */}

                <div className="flex sm:text-lg mt-4">
                  <p className="font-medium w-1/3">Security:</p>
                  <p className="w-2/3">{phone.additional_features.security}</p>
                </div>

                {/* ip rating */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">IP Rating:</p>
                  <p className="w-2/3">
                    {phone.additional_features.water_resistance}
                  </p>
                </div>

                {/* material */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Material:</p>
                  <p className="w-2/3">{phone.additional_features.material}</p>
                </div>

                {/* connectivity */}

                <div className="flex sm:text-lg mt-1">
                  <p className="font-medium w-1/3">Connectivity:</p>
                  <p className="flex flex-wrap gap-x-4 w-2/3">
                    {phone.additional_features.connectivity.map(
                      (connectivity, idx) => (
                        <span key={idx}>{connectivity}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-1/3 space-y-10 sm:space-y-20 pt-20 sm:pt-0 sm:pl-6 lg:pl-20">
          {similarBlogs.length ? (
            <SimilarPhones id={phone._id} brand={phone.brand} />
          ) : (
            ""
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Phone;
