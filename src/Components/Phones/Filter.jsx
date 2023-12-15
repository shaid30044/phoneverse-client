import { useEffect, useState } from "react";
import AllPhones from "./AllPhones";
import axios from "axios";
import Select from "react-select";
import NotFound from "../../Shared/NotFound";
import { MdOutlineFilterList } from "react-icons/md";

const options = [
  { value: "default", label: "Default" },
  { value: "highToLow", label: "$High - $Low" },
  { value: "lowToHigh", label: "$Low - $High" },
];

const Filter = () => {
  const [phone, setPhone] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState(options[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./phones.json");
        setPhone(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  const filteredPhones = phone.filter((phone) =>
    phone.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedPhones = [...filteredPhones];

  if (sortOption.value === "highToLow") {
    sortedPhones.sort((a, b) => b.price - a.price);
  } else if (sortOption.value === "lowToHigh") {
    sortedPhones.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="bg-white p-4">
          <div className="flex items-center gap-2 text-2xl pb-4">
            <p>Filter</p>
            <MdOutlineFilterList />
          </div>

          <div className="w-full">
            <Select
              options={options}
              value={sortOption}
              onChange={handleSortChange}
            />
          </div>
        </div>

        <div className="md:col-span-2 xl:col-span-3">
          <div className="bg-white mb-4 p-4">
            <form>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Phone"
                className="border outline-none rounded-md w-full px-5 py-2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          </div>

          <div>
            {sortedPhones.length === 0 ? (
              <p className="flex justify-center bg-white py-10">
                <NotFound />
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 bg-white p-4">
                {sortedPhones.map((phone, idx) => (
                  <AllPhones key={idx} phone={phone} />
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
