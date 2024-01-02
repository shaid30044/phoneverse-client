import { Link } from "react-router-dom";
import logo from "../../assets/phoneverse-logo.png";
import { useRef } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
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
      page: "Blogs",
      path: "/blogs",
    },
    {
      page: "Dashboard",
      path: "/dashboard",
    },
  ];

  const legals = [
    {
      page: "Terms & Conditions",
      path: "/",
    },
    {
      page: "Privacy Policy",
      path: "/",
    },
    {
      page: "Cookie Policy",
      path: "/",
    },
  ];

  const formRef = useRef();

  const handleContact = (e) => {
    e.preventDefault();

    toast.success("Thank you for subscribing!");

    formRef.current.reset();
  };

  return (
    <div className="pt-10">
      <div>
        <Toaster />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-16 lg:gap-0 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center sm:items-start">
          <div className="w-28">
            <Link to="/">
              <img src={logo} alt="logo" className="w-20" />
            </Link>
          </div>

          <p className="text-lg text-black/60 text-center sm:text-start pt-2 sm:pr-10">
            Unleash Your Connectivity, Explore Limitless Possibilities!
          </p>

          <div className="flex items-center gap-6 pt-5">
            <Link to="/" className="text-lg hover:text-primary duration-300">
              <FaFacebookF />
            </Link>

            <Link to="/" className="text-lg hover:text-primary duration-300">
              <FaInstagram />
            </Link>

            <Link to="/" className="text-xl hover:text-primary duration-300">
              <FaYoutube />
            </Link>

            <Link to="/" className="text-lg hover:text-primary duration-300">
              <RiTwitterXFill />
            </Link>

            <Link to="/" className="text-xl hover:text-primary duration-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* links */}

        <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
          <p className="text-lg font-semibold text-primary pb-5">Links</p>

          <ul className="flex flex-col gap-1.5">
            {pages.map(({ page, path }) => (
              <span key={page}>
                <li>
                  <Link to={path} className="navEffect">
                    {page}
                  </Link>
                </li>
              </span>
            ))}
          </ul>
        </div>

        {/* legals */}

        <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
          <p className="text-lg font-semibold text-primary pb-5">Legal</p>

          <ul className="flex flex-col gap-1.5">
            {legals.map(({ page, path }) => (
              <span key={page}>
                <li>
                  <Link to={path} className="navEffect">
                    {page}
                  </Link>
                </li>
              </span>
            ))}
          </ul>
        </div>

        {/* links */}

        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold text-primary pb-4">
            Stay up to date on the latest from Phone Verse
          </p>

          <form
            ref={formRef}
            onSubmit={handleContact}
            className="flex flex-col w-full"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-past/70 outline-none w-full px-4 py-2 mt-4 mb-3"
            />

            <Button type={"Subscribe"} />
          </form>
        </div>
      </div>

      <p className="text-center bg-past py-1 mt-20">
        Copyright © 2023 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
