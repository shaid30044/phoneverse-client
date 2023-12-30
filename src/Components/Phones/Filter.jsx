import { useEffect, useState } from "react";
import AllMobiles from "../Phones/AllPhones";
import Select from "react-select";
import Drawer from "react-modern-drawer";
import NotFound from "../../Shared/NotFound";
import { MdOutlineFilterList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const options = [
  { value: "default", label: "Default" },
  { value: "highToLow", label: "$High - $Low" },
  { value: "lowToHigh", label: "$Low - $High" },
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
  const [sortOption, setSortOption] = useState(options[0]);
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

  // sort by price

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
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

  if (sortOption.value === "highToLow") {
    sortedMobiles.sort((a, b) => b.price - a.price);
  } else if (sortOption.value === "lowToHigh") {
    sortedMobiles.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      {/* for small devices */}

      <div className="md:hidden fixed z-50 flex justify-center items-center bg-white ring-2 ring-primary rounded-full w-12 h-12">
        <button
          onClick={toggleDrawer}
          className="btn btn-sm bg-transparent hover:bg-transparent text-2xl shadow-none border-none drawer-button"
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
        <div className="hidden md:block bg-white max-h-[940px] p-4">
          <div className="flex items-center gap-2 text-2xl pb-4">
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
                placeholder="Search Mobile"
                className="border-2 outline-none rounded-md w-full px-5 py-2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          </div>

          <div>
            <div className="bg-white px-4 pt-4">
              {/* sort by price */}

              <div className="w-48">
                <Select
                  options={options}
                  value={sortOption}
                  onChange={handleSortChange}
                />
              </div>
            </div>

            {sortedMobiles.length === 0 ? (
              <div className="flex justify-center py-10">
                <NotFound />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 bg-white p-4">
                {sortedMobiles.map((mobile, idx) => (
                  <AllMobiles key={idx} phone={mobile} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
