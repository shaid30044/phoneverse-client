import axios from "axios";
import { useEffect, useState } from "react";

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
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {phones.map((phone, idx) => (
          <div key={idx}>
            <div className="flex justify-center items-center bg-past h-48 p-4">
              <img src={phone.image} alt="" className="h-40" />
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-medium">{phone.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPhones;
