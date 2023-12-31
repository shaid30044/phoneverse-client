import { MdArrowForwardIos } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";

const AllPhones = ({ phone }) => {
  return (
    <div className="group">
      <div className="relative bg-past">
        <div className="relative overflow-hidden flex justify-center items-center bg-cover bg-no-repeat h-48 group-hover:-ml-[15%] sm:group-hover:-ml-[15%] lg:group-hover:-ml-[15%] group-hover:scale-105 sm:group-hover:scale-75 lg:group-hover:scale-105 duration-500 p-4">
          <img src={phone.image[0]} className="h-40" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-1 group-hover:right-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 duration-500 gap-2">
          <button className="btn btn-sm text-[17px] text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out scale-50 group-hover:scale-100 px-0">
            <FaRegHeart />
          </button>

          <button className="btn btn-sm text-[17px] text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out scale-50 group-hover:scale-100 px-0">
            <RiShoppingCart2Line />
          </button>

          <button className="btn btn-sm text-[17px] text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out scale-50 group-hover:scale-100 px-0">
            <MdArrowForwardIos />
          </button>
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPhones;
