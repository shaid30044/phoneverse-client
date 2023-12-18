import { Helmet } from "react-helmet-async";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/phoneverse-logo.png";
import phone from "../assets/sign.jpg";
import Button from "../Shared/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const axiosPublic = useAxiosPublic();
  const { signIn, googleSignIn, facebookSignIn } =
    useContext(AuthContext) || {};
  const navigate = useNavigate();

  const [signInError, setSignInError] = useState("");

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          displayName: res.user?.displayName,
          email: res.user?.email,
          photoURL: res.user?.photoURL,
        };
        toast
          .promise(
            axiosPublic.post("/users", userInfo, { withCredentials: true }),
            {
              loading: "Signing In...",
              success: <b>Sign In successful!</b>,
              error: <b>Sign In failed!</b>,
            },
            {
              duration: 4000,
            }
          )
          .then(() => {
            navigate(location?.state ? location.state : "/");
          });
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((res) => {
        const userInfo = {
          displayName: res.user?.displayName,
          email: res.user?.email,
          photoURL: res.user?.photoURL,
        };
        toast
          .promise(
            axiosPublic.post("/users", userInfo, { withCredentials: true }),
            {
              loading: "Signing In...",
              success: <b>Sign In successful!</b>,
              error: <b>Sign In failed!</b>,
            },
            {
              duration: 4000,
            }
          )
          .then(() => {
            navigate(location?.state ? location.state : "/");
          });
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>

      <Helmet>
        <title>Phone Verse | Sign In</title>
      </Helmet>

      <div className="bg-past h-screen p-4">
        <div className="grid md:grid-cols-2 bg-white h-full">
          <div className="relative p-6 lg:px-20 md:py-10">
            <div className="w-20">
              <Link to="/">
                <img src={logo} alt="logo" className="w-20" />
              </Link>
            </div>

            <div className="flex flex-col justify-center h-[70vh]">
              <ul className="flex gap-4 text-xl font-semibold pb-4">
                <li>
                  <NavLink
                    to="/signIn"
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-primary pb-[1px]" : ""
                    }
                  >
                    Sign In
                  </NavLink>
                </li>

                <p className="text-2xl font-medium">/</p>

                <li>
                  <NavLink
                    to="/signUp"
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-primary pb-[1px]" : ""
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>

              <div className="space-y-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-sm text-lg font-normal shadow-none bg-transparent hover:bg-transparent border-2 border-past rounded-none duration-300 h-10 w-full"
                >
                  <FcGoogle />
                  <span>Sign In With Google</span>
                </button>

                <button
                  onClick={handleFacebookSignIn}
                  className="btn btn-sm text-lg font-normal shadow-none bg-transparent hover:bg-transparent border-2 border-past rounded-none duration-300 h-10 w-full"
                >
                  <FaFacebook className="text-[#2365FF]" />
                  <span>Sign In With Facebook</span>
                </button>
              </div>

              <div className="divider my-6">Or</div>

              <form className="flex flex-col gap-y-2 w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-past/70 outline-none w-full px-4 py-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="bg-past/70 outline-none w-full px-4 py-2 mb-2"
                />

                {/* sign in error */}

                <div className="text-center">
                  {signInError && (
                    <p className="text-sm text-red-600">{signInError}</p>
                  )}
                </div>

                <Button type={"Sign In"} />
              </form>
            </div>

            <div className="absolute bottom-6 md:bottom-10 text-sm">
              Copyright © 2023 - All right reserved
            </div>
          </div>

          <div className="hidden md:block h-full">
            <img src={phone} alt="phone" className="object-cover h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
