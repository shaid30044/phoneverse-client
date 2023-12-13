import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/phoneverse-logo.png";
import "./navlink.css";
import Button from "../Button/Button";

const Navbar = () => {
  const pages = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Phones",
      path: "/phones",
    },
    {
      page: "Cart",
      path: "/cart",
    },
  ];

  return (
    <div className="grid grid-cols-3 items-center px-4 md:px-10 lg:px-20 py-4">
      <Link to="/">
        <img src={logo} alt="logo" className="w-14" />
      </Link>

      <div className="flex justify-center">
        <ul className="flex gap-6 text-lg">
          {pages.map(({ page, path }) => (
            <li key={page}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-primary pb-0.5"
                    : "nav-button duration-300"
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end">
        <Button type={"Sign Up"} />
      </div>
    </div>
  );
};

export default Navbar;
