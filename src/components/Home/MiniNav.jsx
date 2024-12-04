import React, { useState, useEffect } from "react";
import { IoSearchSharp, IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MiniNav = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isnav, setIsnav] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleDropdown2 = () => setDropDown((prev) => !prev);
  const toggleNavbar = () => setIsnav((prev) => !prev);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const route = [
    { name: "Promotional", path: "/Promotional" },
    { name: "Clothing", path: "/Clothing" },
    { name: "Headwear", path: "/Headwear" },
    { name: "Return Gifts", path: "/ReturnGifts" },
    { name: "24 hour production", path: "/production" },
    { name: "Sale", path: "/Sale" },
    { name: "Australia made", path: "/Australia" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsnav(false);
        setDropDown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-line">
        <div className="Mycontainer text-white flex flex-wrap gap-6 items-center justify-between py-6">
          <div>
            <h1 className="uppercase text-4xl text-smallHeader font-bold">
              pgshop
            </h1>
          </div>
          <div className="flex gap-2 border border-border shadow  items-center bg-white w-[55%] h-[48px] px-4">
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Search for anything..."
              className="bg-transparent  w-full outline-none text-black"
            />
            <IoSearchSharp className="text-xl text-black" />
          </div>
          <div className="flex items-center gap-6 relative">
            {/* <IoCartOutline className="text-2xl" /> */}
            {totalQuantity > 0 && (
              <span className="absolute -top-1.5 right-[75%] bg-white border border-brand text-brand text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
            {/* <p className="absolute right-[75%] top-[-10%] border-2 border-customBlue justify-center flex items-center w-5 h-5 text-xs bg-white text-customBlue rounded-[50%]">
              2
            </p> */}
            <IoCartOutline className=" text-customBlue text-3xl" />
            <CiHeart className="text-3xl text-customBlue" />
            <BiUser className="text-3xl text-customBlue " />
          </div>
        </div>
      </div>

      <div className="bg-line pb-3   relative">
        <div className="Mycontainer flex items-center gap-1 lg:justify-center">
          <div className="relative z-10 hidden lg:block">
            <button
              onClick={toggleDropdown}
              className="text-customBlue py-4 gap-2 flex items-center focus:outline-none"
            >
              <span className="text-lg">All Category</span>
              <div>{isOpen ? <IoIosArrowDown /> : <IoIosArrowDown />}</div>
            </button>

            {isOpen && (
              <div
                className={`absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-48 transform transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
              >
                <ul className="py-1">
                  {route.map((link, index) => (
                    <li key={index} onClick={() => setIsOpen(false)}>
                      <Link
                        to={link.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <nav className="text-white lg:px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleNavbar}
                className="text-black focus:outline-none lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isnav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            <div
              className={`${
                isnav
                  ? "block z-10 mt-8 lg:hidden absolute bg-white shadow-lg px-8 md:px-12 py-4 mt-4 right-0 w-[100%] transition-all duration-300 ease-in-out"
                  : "hidden lg:block"
              }`}
            >
              <button
                onClick={toggleDropdown2}
                className="mb-3 lg:hidden text-black lg:gap-5 md:gap-3 flex items-center focus:outline-none"
              >
                <span className="text-lg text-customBlue">All Category</span>
                <div>{dropDown ? <IoIosArrowDown /> : <IoIosArrowBack />}</div>
              </button>
              {dropDown && (
                <div>
                  <ul className="py-1">
                    {route.map((link, index) => (
                      <li key={index} onClick={() => setDropDown(false)}>
                        <Link to={link.path} className="block py-1 ">
                          <p className="text-customBlue text-lg">{link.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ul className="space-y-3 lg:space-y-0 lg:flex lg:space-x-6">
                {route.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="block text-customBlue"
                      onClick={() => setIsnav(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MiniNav;
