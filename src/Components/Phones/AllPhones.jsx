import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";
import Button from "../../Shared/Button/Button";

const AllPhones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./phones.json");
        setPhones(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
        {phones.map((phone, idx) => (
          <div key={idx}>
            <div className="relative overflow-hidden flex justify-center items-center bg-past bg-cover bg-no-repeat h-48 p-4">
              <img
                src={phone.image}
                alt={"phone" + idx}
                className="transition duration-700 ease-in-out hover:scale-110 h-40"
              />
            </div>

            <div className="pt-2">
              <h3 className="text-lg font-medium">{phone.name}</h3>

              <div className="flex justify-between items-center pr-1 pt-1 pb-2">
                <p className="text-black">${phone.price}</p>

                <div className="flex items-center gap-8">
                  <div className="relative bg-cover bg-no-repeat">
                    <button className="btn btn-sm text-[17px] text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out hover:scale-150 px-0">
                      <FaRegHeart />
                    </button>
                  </div>

                  <div className="relative bg-cover bg-no-repeat">
                    <button className="btn btn-sm text-[17px] text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out hover:scale-150 px-0">
                      <RiShoppingCart2Line />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1">
                <Button type={"Details"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPhones;
