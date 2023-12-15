import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/phoneverse-logo.png";
import "./navlink.css";
import Button from "../Button/Button";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

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
    {
      page: "Blog",
      path: "/blog",
    },
    {
      page: "Dashboard",
      path: "/dashboard",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-white grid grid-cols-2 sm:grid-cols-4 items-center px-4 md:px-10 lg:px-20 py-4">
      <div className="w-14">
        <Link to="/">
          <img src={logo} alt="logo" className="w-14" />
        </Link>
      </div>

      {/* large device nav links */}

      <div className="hidden col-span-2 sm:flex justify-center">
        <ul className="flex gap-10 text-lg">
          {pages.map(({ page, path }) => (
            <li key={page}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-primary pb-0.5" : ""
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center">
        <Link to="/signIn">
          <Button type={"Sign In"} />
        </Link>

        {/* small and medium device nav links */}

        <div className="sm:hidden">
          <button
            onClick={toggleDrawer}
            className="btn bg-transparent hover:bg-transparent text-2xl shadow-none border-none drawer-button"
          >
            <CgMenuRight />
          </button>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="top"
            duration={400}
            size={410}
          >
            <div className="bg-past p-3">
              <ul className="flex flex-col justify-center items-center gap-10 text-lg bg-white py-10">
                {pages.map(({ page, path }) => (
                  <li key={page}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "border-b-2 border-primary pb-0.5" : ""
                      }
                    >
                      {page}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
