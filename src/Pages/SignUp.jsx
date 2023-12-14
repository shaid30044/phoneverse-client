import { Helmet } from "react-helmet-async";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/phoneverse-logo.png";
import phone from "../assets/sign.jpg";
import Button from "../Shared/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateProfile, googleLogin } =
    useContext(AuthContext) || {};
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [registerError, setRegisterError] = useState("");

  const onSubmit = (data) => {
    const userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: data.firstName + " " + data.lastName,
      email: data.email,
    };

    console.log(userInfo);

    // createUser(data.email, data.password).then((result) => {
    //   const loggedUser = result.user;
    //   console.log(loggedUser);

    //   updateProfile(data.name, data.photoURL).then(() => {});
    // });
  };

  const handleGoogleLogin = () => {
    // googleLogin()
    //   .then((res) => {
    //     console.log(res.user);
    //   })
    //   .catch((error) => {
    //     setRegisterError(error.message);
    //     console.error("Google login error:", error);
    //   });
  };

  return (
    <div>
      <Helmet>
        <title>Phone Verse | Sign Up</title>
      </Helmet>

      <div className="bg-past h-screen p-4">
        <div className="grid md:grid-cols-2 bg-white rounded-xl h-full">
          <div className="relative p-6 lg:px-20 md:py-10">
            <div className="w-20">
              <Link to="/">
                <img src={logo} alt="logo" className="w-20 pb-4" />
              </Link>
            </div>

            <div className="flex flex-col justify-center h-[75vh] md:h-[70vh] pb-4">
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

              <div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-sm text-lg font-normal shadow-none bg-transparent hover:bg-transparent border-2 border-past rounded-none duration-300 h-10 w-full"
                >
                  <FcGoogle />
                  <span>Sign Up With Google</span>
                </button>
              </div>

              <div className="divider my-6">Or</div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-2 w-full"
              >
                <div className="grid grid-cols-2 gap-x-2">
                  <p>
                    <input
                      type="text"
                      {...register("firstName", { required: true })}
                      placeholder="First Name"
                      className="bg-past/70 outline-none w-full px-4 py-2"
                    />
                    {errors.firstName && (
                      <span className="text-red">First Name is required</span>
                    )}
                  </p>

                  <p>
                    <input
                      type="text"
                      {...register("lastName", { required: true })}
                      placeholder="Last Name"
                      className="bg-past/70 outline-none w-full px-4 py-2"
                    />
                    {errors.lastName && (
                      <span className="text-red">Last Name is required</span>
                    )}
                  </p>
                </div>

                <p>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="bg-past/70 outline-none w-full px-4 py-2"
                  />
                  {errors.email && (
                    <span className="text-red">Email is required</span>
                  )}
                </p>

                <p>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 24,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Password"
                    className="bg-past/70 outline-none w-full px-4 py-2 mb-2"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red">
                      Password must be 6 characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red">
                      Password must be less than 24 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red">
                      Password must have one uppercase, one lower case, one
                      number and one special character.
                    </p>
                  )}
                </p>

                <div className="text-center -mb-4">
                  {registerError && (
                    <p className="text-sm text-red-600">{registerError}</p>
                  )}
                </div>

                <Button type={"Sign Up"} />
              </form>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <Button type={"Demo User"} />
                <Button type={"Demo Admin"} />
              </div>
            </div>

            <div className="absolute bottom-6 md:bottom-10 text-sm pt-4">
              Copyright © 2023 - All right reserved
            </div>
          </div>

          <div className="hidden md:block rounded-r-xl h-full">
            <img
              src={phone}
              alt="phone"
              className="rounded-r-xl object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
