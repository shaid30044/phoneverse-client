import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";
import Button from "../../Shared/Button/Button";

const AllPhones = ({ phone }) => {
  return (
    <div>
      <div className="relative overflow-hidden flex justify-center items-center bg-past bg-cover bg-no-repeat h-48 p-4">
        <img
          src={phone.image}
          className="transition duration-500 ease-in-out hover:scale-110 h-40"
        />
      </div>

      <div className="pt-2">
        <h3 className="text-lg font-medium">{phone.name}</h3>

        <div className="pt-2">
          <p>
            <span className="font-medium">Refresh Rate: </span>
            {phone.display.main.refresh_rate}Hz
          </p>

          <div className="flex gap-2">
            <span className="font-medium">RAM: </span>
            {phone.ram.capacity.map((capacity, idx) => (
              <div key={idx}>{capacity}GB</div>
            ))}
          </div>

          <div className="flex gap-2">
            <span className="font-medium">Storage: </span>
            {phone.storage.capacity.map((capacity, idx) => (
              <div key={idx}>
                {capacity === 1 ? <span>1TB</span> : <span>{capacity}GB</span>}
              </div>
            ))}
          </div>

          <p className="text-black">
            <span className="font-medium">Battery: </span>
            {phone.battery.capacity}mAH
          </p>

          <div className="flex justify-between items-center pr-1 pb-2">
            <p className="text-black">
              <span className="font-medium">Price: </span>${phone.price}
            </p>

            <div className="flex items-center gap-8">
              <div className="relative bg-cover bg-no-repeat">
                <button className="btn btn-sm text-[17px] text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out hover:scale-125 px-0">
                  <FaRegHeart />
                </button>
              </div>

              <div className="relative bg-cover bg-no-repeat">
                <button className="btn btn-sm text-[17px] text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out hover:scale-125 px-0">
                  <RiShoppingCart2Line />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <Button type={"Details"} />
        </div>
      </div>
    </div>
  );
};

export default AllPhones;
