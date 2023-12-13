import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/phoneverse-logo.png";
import "./navlink.css";

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
    <div className="flex items-center px-4 md:px-10 lg:px-20 py-4">
      <Link to="/">
        <img src={logo} alt="logo" className="w-14" />
      </Link>

      <ul className="flex gap-6">
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
  );
};

export default Navbar;
