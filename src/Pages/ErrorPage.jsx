import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/phoneverse-logo.png";
import phone from "../assets/nostalgie.webp";
import Button from "../Shared/Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-past h-screen p-4">
      <div className="grid md:grid-cols-2 bg-white rounded-xl h-full">
        <div className="relative p-6 md:pl-20 md:py-10">
          <div className="w-20">
            <Link to="/">
              <img src={logo} alt="logo" className="w-20" />
            </Link>
          </div>

          <div className="flex flex-col justify-center h-[70vh]">
            <div className="pb-10">
              <p className="text-lg text-black">ERROR 404</p>

              <h3 className="text-3xl font-bold pt-4">Page not found!</h3>

              <p className="font-medium md:pr-10">
                Oops... you may have mistype the address or the page may have
                moved.
              </p>
            </div>

            <div onClick={handleBackToHome}>
              <Button type={"Back to Home"} />
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-10 text-sm">
            Copyright © 2023 - All right reserved
          </div>
        </div>

        <div className="hidden md:block h-full">
          <img
            src={phone}
            alt="phone"
            className="object-cover rounded-r-xl h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
