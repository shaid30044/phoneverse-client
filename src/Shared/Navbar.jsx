import { Link } from "react-router-dom";
import logo from "../assets/phoneverse-logo.png";

const Navbar = () => {
  return (
    <div className="py-4">
      <Link to="/">
        <img src={logo} alt="logo" className="w-16" />
      </Link>
    </div>
  );
};

export default Navbar;
