import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  applyFilters,
} from "../../redux/slices/filterSlice";
import PriceFilter from "./PriceFilter";
import BrandCheckboxes from "./BrandFilter";
import PopularTags from "./PopularTags";
import OneCard from "./OneCard";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.filters);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    "promotion",
    "headwear",
    "clothing",
    "promotion2",
    "headwear2",
    "clothing2",
    "promotion3",
    "headwear3",
    "clothing3",
    "promotion4",
    "headwear4",
    "clothing4",
  ];
  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(applyFilters());
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1025);
      if (window.innerWidth > 1025) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="absolute  -top-10   bg-smallHeader text-white px-2 py-1 rounded"
        >
          {isSidebarOpen ? (
            <IoClose className="text-xl" />
          ) : (
            <IoMenu className="text-xl" />
          )}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`transition-all    ${
          isSidebarOpen
            ? "lg:w-[100%] md:w-96 w-[90vw] absolute md:shadow-lg shadow-lg bg-white lg:shadow-none px-6 py-4 lg:z-0 z-10  "
            : " hidden "
        } `}
      >
        <div className="border-b-2 pb-6">
          <h1 className="font-medium text-base mb-4 uppercase text-brand">
            Category
          </h1>
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="flex items-center gap-2 py-2  cursor-pointer"
            >
              <div
                className={`w-6 h-6 flex justify-center rounded-full ${
                  selectedCategory === category
                    ? "bg-smallHeader text-white"
                    : "border-2"
                }`}
              >
                <div className="bg-white w-2 h-2 rounded-full m-auto"></div>
              </div>
              <p className="text-category text-sm font-normal">{category}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <PriceFilter />
          <BrandCheckboxes />
          <PopularTags />
          <OneCard />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
