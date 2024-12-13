import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

    return (
      <>
        <div className="Mycontainer">
          <div className="flex flex-wrap items-center gap-5 text-smallHeader mt-8 text-lg">
            <Link to={"/"} className="flex items-center gap-3">
              <p>Home</p>
              <MdKeyboardArrowRight className="text-xl" />
            </Link>

            <p className="text-smallHeader">signin/signup</p>
          </div>
        </div>
        <div className=" pt-12 Mycontainer flex lg:flex-nowrap md:flex-nowrap flex-wrap ">
          <div className="lg:w-[93%] md:w-[93%] w-full">
            <img src="/singup.png" alt="" className="w-full" />
          </div>
          <div className="bg-white shadow shadow-shadow    w-full">
            <div className="flex justify-between mb-6">
              <button
                className={`px-4 border py-2 w-full text-center ${
                  !isSignUp
                    ? "bg-smallHeader text-white"
                    : "bg-line text-gray-700"
                } `}
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 w-full text-center ${
                  isSignUp
                    ? "bg-smallHeader text-white"
                    : "bg-gray-200 text-gray-700"
                } `}
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </div>
            <form className="px-6" onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-normal  mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded outline-none "
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal  mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  autoComplete="off"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded outline-none "
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal  mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded outline-none "
                    required
                    minLength="8"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-2 "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
                  </button>
                </div>
              </div>
              {isSignUp && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-normal mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-2 "
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <IoMdEye /> : <IoIosEyeOff />}
                    </button>
                  </div>
                </div>
              )}
              {isSignUp && (
                <div className="mb-4">
                  <label className="flex items-start">
                    <input type="checkbox" required className="mr-2" />
                    <span className="text-gray-600 text-sm  max-w-72">
                      Are you agree to Clicon{" "}
                      <span className="text-smallHeader">
                        {" "}
                        Terms of Condition
                      </span>{" "}
                      and
                      <span className="text-smallHeader"> Privacy Policy.</span>
                    </span>
                  </label>
                </div>
              )}
              <button
                type="submit"
                className="w-full  bg-smallHeader flex items-center justify-center gap-2 text-white py-3 rounded hover:bg-indigo-700 focus:outline-none"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
                <FaArrowRight />
              </button>
            </form>
            <div className="px-6 pb-5">
              <div className="flex items-center mt-6">
                <hr className="w-full" />
                <p className="px-7 text-minPrice">or</p>
                <hr className="w-full" />
              </div>
              <div className="flex items-center justify-center text-gogle rounded mt-3 gap-3 border border-border2 py-3 w-full">
                <FcGoogle />
                <p>Sign up with Google</p>
              </div>
              <div className="flex items-center justify-center text-gogle rounded mt-3 gap-3 border border-border2 py-3 w-full">
                <SiApple />
                <p>Sign up with Apple</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default SignUp;
