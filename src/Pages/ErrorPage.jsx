import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/phoneverse-logo.png";
import phone from "../assets/pexels-markus-winkler-3639873.jpg";
import Button from "../Shared/Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-past h-screen p-4">
      <div className="grid lg:grid-cols-2 bg-white rounded-xl h-full">
        <div className="relative p-6 md:px-20 md:py-10">
          <div className="w-20">
            <Link to="/">
              <img src={logo} alt="logo" className="w-20" />
            </Link>
          </div>

          <div className="flex flex-col justify-center h-[70vh]">
            <div className="pb-10">
              <p className="text-lg text-black">ERROR 404</p>

              <h3 className="text-3xl font-bold pt-4">Page not found!</h3>

              <p className="font-medium">
                Oops... you may have mistype the address or the page may have
                moved.
              </p>
            </div>

            <div>
              <span onClick={handleBackToHome}>
                <Button type={"Back to Home"} />
              </span>
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-10 text-sm">
            Copyright © 2023 - All right reserved
          </div>
        </div>

        <div className="relative hidden lg:block overflow-hidden bg-cover bg-no-repeat rounded-r-xl hover:rounded-r-xl">
          <img
            src={phone}
            alt="phone"
            className="transition-transform duration-1000 ease-in-out transform hover:-translate-y-20 xl:hover:-translate-y-60 rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
