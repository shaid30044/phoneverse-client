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
  { value: 6, label: "6 GB" },
  { value: 8, label: "8 GB" },
  { value: 12, label: "12 GB" },
  { value: 16, label: "16 GB" },
];

const storageOptions = [
  { value: "all", label: "All" },
  { value: 128, label: "128 GB" },
  { value: 256, label: "256 GB" },
  { value: 512, label: "512 GB" },
  { value: 1, label: "1 TB" },
];

const Filter = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./phones.json");
      const data = await res.json();
      setMobiles(data);
    };
    fetchData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriceSort, setSelectedPriceSort] = useState(options[0]);
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

  // filter by OS

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

  const filteredMobiles = mobiles.filter((mobile) => {
    // search functionality

    const includesSearchQuery = mobile.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

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

    return (
      includesSelectedProcessor &&
      includesSearchQuery &&
      includesSelectedOS &&
      includesSelectedBrand &&
      includesSelectedMemory &&
      includesSelectedStorage
    );
  });

  // sort mobiles

  const sortedMobiles = [...filteredMobiles];

  if (selectedPriceSort.value === "highToLow") {
    sortedMobiles.sort((a, b) => b.price - a.price);
  } else if (selectedPriceSort.value === "lowToHigh") {
    sortedMobiles.sort((a, b) => a.price - b.price);
  }

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
