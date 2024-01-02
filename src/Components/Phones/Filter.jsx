import { useEffect, useState } from "react";
import AllMobiles from "../Phones/AllPhones";
import Select from "react-select";
import Drawer from "react-modern-drawer";
import NotFound from "../../Shared/NotFound";
import {
  MdOutlineFilterList,
  MdArrowForwardIos,
  MdArrowBackIosNew,
} from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import "./scrollbar.css";
import Button from "../../Shared/Button/Button";
import usePhones from "../../Hooks/usePhones";

const options = [
  { value: "default", label: "Default" },
  { value: "highToLow", label: "$High - $Low" },
  { value: "lowToHigh", label: "$Low - $High" },
];

const pageOptions = [
  { value: 5, label: "5 items per page" },
  { value: 10, label: "10 items per page" },
  { value: 20, label: "20 items per page" },
  { value: 50, label: "50 items per page" },
  { value: 100, label: "100 items per page" },
];

const refreshRateOptions = [
  { value: "all", label: "All" },
  { value: 60, label: "60Hz" },
  { value: 90, label: "90Hz" },
  { value: 120, label: "120Hz" },
  { value: 144, label: "144Hz" },
];

const peakBrightnessOptions = [
  { value: "all", label: "All" },
  { value: "1-500", label: "1 ~ 500 nits" },
  { value: "500-1000", label: "500 ~ 1000 nits" },
  { value: "1000-1500", label: "1000 ~ 1500 nits" },
  { value: "1500-2000", label: "1500 ~ 2000 nits" },
  { value: "2000-2500", label: "2000 ~ 2500 nits" },
  { value: "2500-3000", label: "2500 ~ 3000 nits" },
  { value: "3000-3500", label: "3000 ~ 3500 nits" },
  { value: "3500-4000", label: "3500 ~ 4000 nits" },
  { value: "4000-4500", label: "4000 ~ 4500 nits" },
  { value: "4500-5000", label: "4500 ~ 5000 nits" },
  { value: "5000+", label: "5000+ nits" },
];

const processorOptions = [
  { value: "all", label: "All" },
  { value: "Snapdragon", label: "Snapdragon" },
  { value: "Bionic", label: "Bionic" },
  { value: "MediaTek ", label: "MediaTek " },
  { value: "Kirin ", label: "Kirin " },
  { value: "Tensor ", label: "Tensor " },
];

const osOptions = [
  { value: "all", label: "All" },
  { value: "Android", label: "Android" },
  { value: "iOS", label: "iOS" },
  { value: "HarmonyOS ", label: "HarmonyOS " },
];

const memoryOptions = [
  { value: "all", label: "All" },
  { value: 6, label: "6GB" },
  { value: 8, label: "8GB" },
  { value: 12, label: "12GB" },
  { value: 16, label: "16GB" },
];

const storageOptions = [
  { value: "all", label: "All" },
  { value: 128, label: "128GB" },
  { value: 256, label: "256GB" },
  { value: 512, label: "512GB" },
  { value: 1, label: "1TB" },
];

const batteryOptions = [
  { value: "all", label: "All" },
  { value: "1-3000", label: "1 ~ 3000 mAH" },
  { value: "3000-3500", label: "3000 ~ 3500 mAH" },
  { value: "3500-4000", label: "3500 ~ 4000 mAH" },
  { value: "4000-4500", label: "4000 ~ 4500 mAH" },
  { value: "4500-5000", label: "4500 ~ 5000 mAH" },
  { value: "5000-5500", label: "5000 ~ 5500 mAH" },
  { value: "5500-6000", label: "5500 ~ 6000 mAH" },
  { value: "6000+", label: "6000+ mAH" },
];

const Filter = () => {
  const [phones] = usePhones();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(null);
  const [defaultMax, setDefaultMax] = useState("");

  useEffect(() => {
    const prices = phones.map((mobile) => mobile.price);
    const max = Math.max(...prices);

    setMaxPrice(max);
    setDefaultMax(max);
  }, [phones]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriceSort, setSelectedPriceSort] = useState(options[0]);
  const [isPriceAccordionOpen, setIsPriceAccordionOpen] = useState(false);
  const [selectedRefreshRate, setSelectedRefreshRate] = useState(
    refreshRateOptions[0]
  );
  const [isRefreshRateAccordionOpen, setIsRefreshRateAccordionOpen] =
    useState(false);
  const [selectedPeakBrightness, setSelectedPeakBrightness] = useState(
    peakBrightnessOptions[0]
  );
  const [isPeakBrightnessAccordionOpen, setIsPeakBrightnessAccordionOpen] =
    useState(false);
  const [selectedProcessor, setSelectedProcessor] = useState(
    processorOptions[0]
  );
  const [isProcessorAccordionOpen, setIsProcessorAccordionOpen] =
    useState(false);
  const [selectedOS, setSelectedOS] = useState(osOptions[0]);
  const [isOSAccordionOpen, setIsOSAccordionOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isMemoryAccordionOpen, setIsMemoryAccordionOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(memoryOptions[0]);
  const [isStorageAccordionOpen, setIsStorageAccordionOpen] = useState(false);
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[0]);
  const [isBatteryAccordionOpen, setIsBatteryAccordionOpen] = useState(false);
  const [selectedBattery, setSelectedBattery] = useState(storageOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageOptions[1].value);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const brands = [
    "Samsung",
    "Apple",
    "Huawei",
    "Google",
    "ASUS",
    "Oneplus",
    "Xiaomi",
    "Vivo",
    "Oppo",
    "ZTE",
  ];

  // search functionality

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // filter by brand

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand === selectedBrand ? "" : brand);
  };

  // filter by Refresh Rate

  const handleRefreshRateChange = (selectedOption) => {
    setSelectedRefreshRate(selectedOption);
  };

  // filter by Peak Brightness

  const handlePeakBrightnessChange = (selectedOption) => {
    setSelectedPeakBrightness(selectedOption);
  };

  // filter by Processor

  const handleProcessorChange = (selectedOption) => {
    setSelectedProcessor(selectedOption);
  };

  // filter by OS

  const handleOSChange = (selectedOption) => {
    setSelectedOS(selectedOption);
  };

  // filter by memory

  const handleMemoryChange = (selectedOption) => {
    setSelectedMemory(selectedOption);
  };

  // filter by storage

  const handleStorageChange = (selectedOption) => {
    setSelectedStorage(selectedOption);
  };

  // filter by battery

  const handleBatteryChange = (selectedOption) => {
    setSelectedBattery(selectedOption);
  };

  const filteredMobiles = phones.filter((mobile) => {
    // search functionality

    const includesSearchQuery = mobile.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // price filtering

    const includesSelectedPrice =
      (minPrice === null || mobile.price >= minPrice) &&
      (maxPrice === null || mobile.price <= maxPrice);

    // refresh rate filtering

    const includesSelectedRefreshRate =
      !selectedRefreshRate ||
      selectedRefreshRate.value === "all" ||
      mobile.display.main.refresh_rate === selectedRefreshRate.value;

    // peak brightness filtering

    const includesSelectedPeakBrightness =
      !selectedPeakBrightness ||
      selectedPeakBrightness.value === "all" ||
      (selectedPeakBrightness.value === "5000+" &&
        mobile.display.main.peak_brightness > 5000) ||
      (selectedPeakBrightness.value !== "5000+" &&
        mobile.display.main.peak_brightness >=
          parseInt(selectedPeakBrightness.value.split("-")[0], 10) &&
        mobile.display.main.peak_brightness <=
          parseInt(selectedPeakBrightness.value.split("-")[1], 10));

    // processor filtering

    const includesSelectedProcessor =
      !selectedProcessor ||
      selectedProcessor.value === "all" ||
      mobile.processor
        .toLowerCase()
        .includes(selectedProcessor.value.toLowerCase());

    // os filtering

    const includesSelectedOS =
      !selectedOS ||
      selectedOS.value === "all" ||
      mobile.operating_system
        .toLowerCase()
        .includes(selectedOS.value.toLowerCase());

    // brand filtering

    const includesSelectedBrand =
      !selectedBrand ||
      mobile.brand.toLowerCase() === selectedBrand.toLowerCase();

    // memory filtering

    const includesSelectedMemory =
      !selectedMemory ||
      selectedMemory.value === "all" ||
      mobile.ram.capacity.includes(selectedMemory.value);

    // storage filtering

    const includesSelectedStorage =
      !selectedStorage ||
      selectedStorage.value === "all" ||
      mobile.storage.capacity.includes(selectedStorage.value);

    // peak brightness filtering

    const includesSelectedBattery =
      !selectedBattery ||
      selectedBattery.value === "all" ||
      (selectedBattery.value === "6000+" && mobile.battery.capacity > 6000) ||
      (selectedBattery.value !== "6000+" &&
        mobile.battery.capacity >=
          parseInt(selectedBattery.value.split("-")[0], 10) &&
        mobile.battery.capacity <=
          parseInt(selectedBattery.value.split("-")[1], 10));

    return (
      includesSelectedPrice &&
      includesSelectedRefreshRate &&
      includesSelectedPeakBrightness &&
      includesSelectedProcessor &&
      includesSearchQuery &&
      includesSelectedOS &&
      includesSelectedBrand &&
      includesSelectedMemory &&
      includesSelectedStorage &&
      includesSelectedBattery
    );
  });

  // reset filter

  const resetFilters = () => {
    setSearchQuery("");
    setMinPrice(0);
    setMaxPrice(defaultMax);
    setSelectedPriceSort(options[0]);
    setSelectedRefreshRate(refreshRateOptions[0]);
    setIsRefreshRateAccordionOpen(false);
    setSelectedPeakBrightness(peakBrightnessOptions[0]);
    setIsPeakBrightnessAccordionOpen(false);
    setSelectedProcessor(processorOptions[0]);
    setIsProcessorAccordionOpen(false);
    setSelectedOS(osOptions[0]);
    setIsOSAccordionOpen(false);
    setSelectedBrand("");
    setIsMemoryAccordionOpen(false);
    setSelectedMemory(memoryOptions[0]);
    setIsStorageAccordionOpen(false);
    setSelectedStorage(storageOptions[0]);
    setIsBatteryAccordionOpen(false);
    setSelectedBattery(storageOptions[0]);
    setCurrentPage(1);
    setItemsPerPage(pageOptions[1].value);
  };

  // phones

  const sortedMobiles = [...filteredMobiles];

  if (selectedPriceSort.value === "highToLow") {
    sortedMobiles.sort((a, b) => b.price - a.price);
  } else if (selectedPriceSort.value === "lowToHigh") {
    sortedMobiles.sort((a, b) => a.price - b.price);
  }

  // pagination

  const indexOfLastMobile = currentPage * itemsPerPage;
  const indexOfFirstMobile = indexOfLastMobile - itemsPerPage;
  const currentMobiles = sortedMobiles.slice(
    indexOfFirstMobile,
    indexOfLastMobile
  );

  const handlePageChange = (pageNumber, itemsPerPage) => {
    if (
      pageNumber < 1 ||
      pageNumber > Math.ceil(filteredMobiles.length / itemsPerPage)
    ) {
      return;
    }

    setCurrentPage(pageNumber);
    setItemsPerPage(itemsPerPage);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredMobiles.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* for small devices */}

      <div className="md:hidden fixed z-50 flex justify-center items-center bg-primary rounded-r-full w-10 h-10 -ml-4">
        <button
          onClick={toggleDrawer}
          className="btn btn-sm bg-transparent hover:bg-transparent text-2xl text-white shadow-none border-none drawer-button pr-4"
        >
          <MdOutlineFilterList />
        </button>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          duration={400}
          className="overflow-scroll"
        >
          <div className="bg-white p-4">
            <div>
              {/* filter by price */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() => setIsPriceAccordionOpen((prev) => !prev)}
                >
                  <p>Price</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isPriceAccordionOpen ? "rotate-135" : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isPriceAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <form className="flex flex-row justify-between items-center gap-2 py-2">
                    <input
                      type="text"
                      name="min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="text-center border-2 border-black/40 focus:outline-none w-20 px-2 py-1"
                    />

                    <p>to</p>

                    <input
                      type="text"
                      name="max"
                      value={maxPrice || ""}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="text-center border-2 border-black/40 focus:outline-none w-20 px-2 py-1"
                    />
                  </form>
                </div>
              </div>

              {/* filter by refresh rate */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() => setIsRefreshRateAccordionOpen((prev) => !prev)}
                >
                  <p>Refresh Rate</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isRefreshRateAccordionOpen ? "rotate-135" : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isRefreshRateAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {refreshRateOptions.map((refreshRate, idx) => (
                    <div key={idx}>
                      <label className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          id={refreshRate.value}
                          value={refreshRate.value}
                          className="checkbox checkbox-xs"
                          checked={
                            selectedRefreshRate?.value === refreshRate.value
                          }
                          onChange={() => handleRefreshRateChange(refreshRate)}
                        />
                        <span>{refreshRate.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* filter by peak brightness */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() =>
                    setIsPeakBrightnessAccordionOpen((prev) => !prev)
                  }
                >
                  <p>Peak Brightness</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isPeakBrightnessAccordionOpen
                          ? "rotate-135"
                          : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isPeakBrightnessAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {peakBrightnessOptions.map((peakBrightness, idx) => (
                    <div key={idx}>
                      <label className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          id={peakBrightness.value}
                          value={peakBrightness.value}
                          className="checkbox checkbox-xs"
                          checked={
                            selectedPeakBrightness?.value ===
                            peakBrightness.value
                          }
                          onChange={() =>
                            handlePeakBrightnessChange(peakBrightness)
                          }
                        />
                        <span>{peakBrightness.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* filter by processor */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() => setIsProcessorAccordionOpen((prev) => !prev)}
                >
                  <p>Processor</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isProcessorAccordionOpen ? "rotate-135" : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isProcessorAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {processorOptions.map((processor, idx) => (
                    <div key={idx}>
                      <label className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          id={processor.value}
                          value={processor.value}
                          className="checkbox checkbox-xs"
                          checked={selectedProcessor?.value === processor.value}
                          onChange={() => handleProcessorChange(processor)}
                        />
                        <span>{processor.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* filter by OS */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() => setIsOSAccordionOpen((prev) => !prev)}
                >
                  <p>OS</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isOSAccordionOpen ? "rotate-135" : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isOSAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {osOptions.map((os, idx) => (
                    <div key={idx}>
                      <label className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          id={os.value}
                          value={os.value}
                          className="checkbox checkbox-xs"
                          checked={selectedOS?.value === os.value}
                          onChange={() => handleOSChange(os)}
                        />
                        <span>{os.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* filter by Memory */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() => setIsMemoryAccordionOpen((prev) => !prev)}
                >
                  <p>Memory</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isMemoryAccordionOpen ? "rotate-135" : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isMemoryAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {memoryOptions.map((memory, idx) => (
                    <div key={idx}>
                      <label className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          id={memory.value}
                          value={memory.value}
                          className="checkbox checkbox-xs"
                          checked={selectedMemory?.value === memory.value}
                          onChange={() => handleMemoryChange(memory)}
                        />
                        <span>{memory.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* filter by Storage */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() => setIsStorageAccordionOpen((prev) => !prev)}
                >
                  <p>Storage</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isStorageAccordionOpen ? "rotate-135" : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isStorageAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {storageOptions.map((storage, idx) => (
                    <div key={idx}>
                      <label className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          id={storage.value}
                          value={storage.value}
                          className="checkbox checkbox-xs"
                          checked={selectedStorage?.value === storage.value}
                          onChange={() => handleStorageChange(storage)}
                        />
                        <span>{storage.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* filter by Battery */}

              <div>
                <div
                  className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
                  onClick={() => setIsBatteryAccordionOpen((prev) => !prev)}
                >
                  <p>Battery</p>
                  <p>
                    <FaPlus
                      className={`transform inline-block ${
                        isBatteryAccordionOpen ? "rotate-135" : "rotate-0"
                      } transition-transform duration-300`}
                    />
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-max-height space-y-1 ${
                    isBatteryAccordionOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {batteryOptions.map((battery, idx) => (
                    <div key={idx}>
                      <label className="flex items-center gap-2 text-lg">
                        <input
                          type="checkbox"
                          id={battery.value}
                          value={battery.value}
                          className="checkbox checkbox-xs"
                          checked={selectedBattery?.value === battery.value}
                          onChange={() => handleBatteryChange(battery)}
                        />
                        <span>{battery.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div onClick={resetFilters} className="grid pt-6">
                <Button type={"Reset All"} />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
      {/* filter by brand */}

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-20 text-lg font-medium bg-white p-4 mb-4">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            onClick={() => handleBrandClick(brand)}
            className={`text-black hover:text-primary duration-300 cursor-pointer ${
              brand === selectedBrand ? "text-primary" : ""
            }`}
          >
            {brand}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="hidden md:block bg-white p-4">
          <div className="flex justify-between items-center gap-2 text-2xl pb-4">
            <p>Filter</p>
            <MdOutlineFilterList />
          </div>

          {/* filter by price */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsPriceAccordionOpen((prev) => !prev)}
            >
              <p>Price</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isPriceAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isPriceAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <form className="flex flex-col lg:flex-row justify-between items-center gap-2 py-2">
                <input
                  type="text"
                  name="min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="text-center border-2 border-black/40 focus:outline-none w-24 px-2 py-1"
                />

                <p>to</p>

                <input
                  type="text"
                  name="max"
                  value={maxPrice || ""}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="text-center border-2 border-black/40 focus:outline-none w-24 px-2 py-1"
                />
              </form>
            </div>
          </div>

          {/* filter by Refresh Rate */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsRefreshRateAccordionOpen((prev) => !prev)}
            >
              <p>Refresh Rate</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isRefreshRateAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isRefreshRateAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {refreshRateOptions.map((refreshRate, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      id={refreshRate.value}
                      value={refreshRate.value}
                      className="checkbox checkbox-xs"
                      checked={selectedRefreshRate?.value === refreshRate.value}
                      onChange={() => handleRefreshRateChange(refreshRate)}
                    />
                    <span>{refreshRate.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* filter by Peak Brightness */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsPeakBrightnessAccordionOpen((prev) => !prev)}
            >
              <p>Peak Brightness</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isPeakBrightnessAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isPeakBrightnessAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {peakBrightnessOptions.map((peakBrightness, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      id={peakBrightness.value}
                      value={peakBrightness.value}
                      className="checkbox checkbox-xs"
                      checked={
                        selectedPeakBrightness?.value === peakBrightness.value
                      }
                      onChange={() =>
                        handlePeakBrightnessChange(peakBrightness)
                      }
                    />
                    <span>{peakBrightness.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* filter by Processor */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsProcessorAccordionOpen((prev) => !prev)}
            >
              <p>Processor</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isProcessorAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isProcessorAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {processorOptions.map((processor, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      id={processor.value}
                      value={processor.value}
                      className="checkbox checkbox-xs"
                      checked={selectedProcessor?.value === processor.value}
                      onChange={() => handleProcessorChange(processor)}
                    />
                    <span>{processor.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* filter by OS */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsOSAccordionOpen((prev) => !prev)}
            >
              <p>OS</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isOSAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isOSAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {osOptions.map((os, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      id={os.value}
                      value={os.value}
                      className="checkbox checkbox-xs"
                      checked={selectedOS?.value === os.value}
                      onChange={() => handleOSChange(os)}
                    />
                    <span>{os.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* filter by Memory */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsMemoryAccordionOpen((prev) => !prev)}
            >
              <p>Memory</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isMemoryAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isMemoryAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {memoryOptions.map((memory, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      id={memory.value}
                      value={memory.value}
                      className="checkbox checkbox-xs"
                      checked={selectedMemory?.value === memory.value}
                      onChange={() => handleMemoryChange(memory)}
                    />
                    <span>{memory.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* filter by Storage */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsStorageAccordionOpen((prev) => !prev)}
            >
              <p>Storage</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isStorageAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isStorageAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {storageOptions.map((storage, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      id={storage.value}
                      value={storage.value}
                      className="checkbox checkbox-xs"
                      checked={selectedStorage?.value === storage.value}
                      onChange={() => handleStorageChange(storage)}
                    />
                    <span>{storage.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* filter by Battery */}

          <div>
            <div
              className="flex justify-between items-center border-b-[3px] text-xl border-past pt-4 pb-1 mb-2 cursor-pointer"
              onClick={() => setIsBatteryAccordionOpen((prev) => !prev)}
            >
              <p>Battery</p>
              <p>
                <FaPlus
                  className={`transform inline-block ${
                    isBatteryAccordionOpen ? "rotate-135" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </p>
            </div>

            <div
              className={`overflow-hidden transition-max-height space-y-1 ${
                isBatteryAccordionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {batteryOptions.map((battery, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      id={battery.value}
                      value={battery.value}
                      className="checkbox checkbox-xs"
                      checked={selectedBattery?.value === battery.value}
                      onChange={() => handleBatteryChange(battery)}
                    />
                    <span>{battery.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div onClick={resetFilters} className="grid pt-6">
            <Button type={"Reset All"} />
          </div>
        </div>

        <div className="md:col-span-2 xl:col-span-3">
          <div className="bg-white mb-4 p-4">
            <form>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Phone Here..."
                className="border-2 outline-none rounded-md w-full px-5 py-2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          </div>

          <div>
            <div className="flex justify-between gap-4 bg-white px-4 py-4">
              {/* sort by price */}

              <div className="w-1/2 sm:w-52">
                <Select
                  options={options}
                  value={selectedPriceSort}
                  onChange={(selectedOption) =>
                    setSelectedPriceSort(selectedOption)
                  }
                />
              </div>

              {/* sort by item */}

              <div className="w-1/2 sm:w-52">
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

            {currentMobiles.length === 0 ? (
              <div className="flex justify-center py-10">
                <NotFound />
              </div>
            ) : (
              <div className="bg-white">
                <div className="example grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 bg-white h-screen overflow-x-hidden overflow-y-scroll px-4">
                  {currentMobiles.map((mobile, idx) => (
                    <div key={idx}>
                      <AllMobiles phone={mobile} />
                    </div>
                  ))}
                </div>

                {/* pagination buttons */}

                <div
                  className="flex justify-center items-center gap-4
                  sm:gap-8 p-4"
                >
                  <p
                    className="flex justify-center items-center text-sm rounded-full bg-past hover:bg-primary text-black hover:text-white duration-300 cursor-pointer w-5 h-5 px-1"
                    onClick={() =>
                      handlePageChange(currentPage - 1, itemsPerPage)
                    }
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
                    onClick={() =>
                      handlePageChange(currentPage + 1, itemsPerPage)
                    }
                    disabled={currentPage === pageNumbers.length}
                  >
                    <MdArrowForwardIos />
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
