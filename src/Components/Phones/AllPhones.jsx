import { MdArrowForwardIos } from "react-icons/md";
import { FaRegHeart /*FaHeart*/ } from "react-icons/fa6";
import { IoGitCompareOutline /*IoGitCompare*/ } from "react-icons/io5";
import { RiShoppingCart2Line /*RiShoppingCart2Fill*/ } from "react-icons/ri";
import { Link } from "react-router-dom";

const AllPhones = ({ phone }) => {
  return (
    <div>
      <div className="relative bg-past">
        <div className="relative overflow-hidden flex justify-center items-center bg-cover bg-no-repeat h-48 px-4 pt-4 pb-2">
          <img src={phone.image[0]} className="h-40" />
        </div>

        <div className="flex justify-around items-center pb-1">
          <button className="btn btn-sm text-base text-black/70 hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none duration-500 px-0">
            <FaRegHeart />
          </button>

          <button className="btn btn-sm text-base text-black/70 hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none duration-500 px-0">
            <RiShoppingCart2Line />
          </button>

          <button className="btn btn-sm text-base text-black/70 hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none duration-500 px-0">
            <IoGitCompareOutline />
          </button>

          <Link to={`/phones/${phone.name}`}>
            <button className="btn btn-sm text-base text-black/70 hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none duration-500 px-0">
              <MdArrowForwardIos />
            </button>
          </Link>
        </div>
      </div>

      <div className="pt-2">
        <h3 className="text-lg font-medium">{phone.name}</h3>

        <div className="pt-2">
          <p>
            <span className="font-medium">Refresh Rate: </span>
            {phone.display.main.refresh_rate}Hz
          </p>

          <p>
            <span className="font-medium">Peak Brightness: </span>
            {phone.display.main.peak_brightness}nits
          </p>

          <p>
            <span className="font-medium">Processor: </span>
            {phone.processor}
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

          <div>
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
