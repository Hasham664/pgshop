import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { setSearchText, applyFilters } from "../../redux/slices/filterSlice";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import {
  setSelectedBrands,
  setMinPrice,
  setMaxPrice,
  setSelectedCategory
} from "../../redux/slices/filterSlice";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [maxVisiblePages, setMaxVisiblePages] = useState(6);
  const [sortOption, setSortOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

 const { filteredProducts, searchText, activeFilters } = useSelector(
   (state) => state.filters
 );
 const filteredCount = useSelector(
   (state) => state.filters.filteredProducts.length
  );
  
  const handleClearFilter = (filterType) => {
    if (filterType === "category") dispatch(setSelectedCategory("all"));
    if (filterType === "brand") dispatch(setSelectedBrands([]));
    if (filterType === "price") {
      dispatch(setMinPrice(0));
      dispatch(setMaxPrice(1000));
    }
    dispatch(applyFilters());
  };

   const handleSortSelection = (option) => {
     setSortOption(option);
     setIsDropdownOpen(false); 
   };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setMaxVisiblePages(4);
      } else {
        setMaxVisiblePages(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return (
        parseFloat(a.price.split(" ")[1].slice(1)) -
        parseFloat(b.price.split(" ")[1].slice(1))
      );
    } else if (sortOption === "highToLow") {
      return (
        parseFloat(b.price.split(" ")[1].slice(1)) -
        parseFloat(a.price.split(" ")[1].slice(1))
      );
    }
    return 0;
  });
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const showPagination = sortedProducts.length > itemsPerPage;

  const currentItems = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(`${product.name} added to cart`);
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const setSearchTextChanger = (e) => {
    dispatch(setSearchText(e.target.value));
    dispatch(applyFilters());
  };

  return (
    <>
      <div className="Mycontainer relative h-full min-h-[2500px]  flex gap-4 justify-between pt-16">
        <div className="lg:w-[30%]">
          <Sidebar />
        </div>

        <div className="lg:w-[70%]">
          <div className="flex flex-wrap gap-3 items-center lg:justify-between md:justify-between justify-end">
            <div className="flex items-center justify-between border border-border2 px-3 py-3 lg:w-[43%] md:w-[42%] w-full">
              <input
                type="text"
                placeholder="Search for anything..."
                className="outline-none border-none w-full"
                value={searchText}
                onChange={setSearchTextChanger}
              />
              <IoSearchOutline className="text-2xl" />
            </div>
            <div className="flex items-center gap-3">
              <p>Sort by:</p>
              <div className="relative">
                <button
                  className="  flex items-center justify-between w-52 gap-2 border border-border2 px-4 py-3"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  {sortOption === "lowToHigh"
                    ? "Lowest to Highest"
                    : sortOption === "highToLow"
                    ? "Highest to Lowest"
                    : "Most Popular"}
                  <span className="">
                    {isDropdownOpen ? (
                      <IoIosArrowUp className="text-black" />
                    ) : (
                      <IoIosArrowDown className="text-black" />
                    )}
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white border border-border2 mt-2 w-full z-10">
                    <button
                      onClick={() => handleSortSelection("lowToHigh")}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${
                        sortOption === "lowToHigh" ? "bg-gray-100" : ""
                      }`}
                    >
                      Lowest to Highest
                    </button>
                    <button
                      onClick={() => handleSortSelection("highToLow")}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${
                        sortOption === "highToLow" ? "bg-gray-100" : ""
                      }`}
                    >
                      Highest to Lowest
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap bg-activeFilter px-5 py-3 rounded-md mt-4">
            <div className="flex flex-wrap items-center gap-4">
              {activeFilters.category && activeFilters.category !== "all" && (
                <div className="filter-item">
                  <span className="text-sm">{activeFilters.category}</span>
                  <button
                    className="px-2 text-lg text-border"
                    onClick={() => handleClearFilter("category")}
                  >
                    x
                  </button>
                </div>
              )}
              {activeFilters.brands && activeFilters.brands.length > 0 && (
                <div className="filter-item">
                  <span className="text-sm">
                    {activeFilters.brands.join(", ")}
                  </span>
                  <button
                    className="px-2 text-lg"
                    onClick={() => handleClearFilter("brand")}
                  >
                    x
                  </button>
                </div>
              )}
              {activeFilters.price &&
                activeFilters.price.length === 2 &&
                (activeFilters.price[0] !== 0 ||
                  activeFilters.price[1] !== 1000) && (
                  <div className="filter-item">
                    <span className="text-sm">
                      ${activeFilters.price[0]} - ${activeFilters.price[1]}
                    </span>
                    <button
                      className="px-2 text-lg"
                      onClick={() => handleClearFilter("price")}
                    >
                      x
                    </button>
                  </div>
                )}
            </div>

            <div className="flex items-center gap-1 pt-3 lg:pt-0 md:pt-0 sm:pt-0 ">
              {" "}
              <span className="text-brand font-semibold">{filteredCount}</span>
              <p className="text-border ">Results found</p>
            </div>
          </div>

          <div className="grid grid-cols-1 custom-card:grid-cols-2 lg:grid-cols-3 max-sm2:grid-cols-1 gap-6 mt-10">
            {currentItems.map((product) => (
              <div
                key={product.id}
                onClick={() => handleViewProduct(product.id)}
                className="border border-border2 p-6 relative"
              >
                <img src={product.img} alt="" className="w-full" />
                <div className="absolute top-[2%] left-[5%]">
                  <p className="bg-heading text-white w-fit px-2 rounded-sm text-xs py-1.5">
                    {product.off}
                  </p>
                  <p className="bg-smallHeader text-white w-fit px-2 rounded-sm text-xs py-1.5 mt-2">
                    {product.hot}
                  </p>
                </div>
                <div className="text-center py-4">
                  <h2 className="text-lg font-bold text-brand pt-1">
                    {product.name}
                  </h2>
                  <p className="font-normal text-brand">{product.code}</p>
                  <h2 className="text-xl text-heading font-semibold pt-4">
                    {product.price}
                  </h2>
                  <p className="text-base font-normal text-brand pt-3">
                    {product.stock}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <p className="text-xl text-smallHeader">{product.icon}</p>
                    <p className="text-base font-semibold text-brand">
                      {product.free}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-xl text-smallHeader">{product.truck}</p>
                    <p className="text-base font-semibold text-brand">
                      {product.delivery}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 justify-between mt-10 mb-2">
                  <p className="bg-icons p-3 text-2xl rounded-sm">
                    {product.heart}
                  </p>
                  <div
                    onClick={() => {
                      handleAddToCart(product);
                    }}
                    className="flex items-center rounded-sm gap-1 px-2 py-3 bg-smallHeader text-white w-full justify-center cursor-pointer"
                  >
                    <p className="text-xl">{product.cart}</p>
                    <button className="uppercase text-sm">
                      {product.button}
                    </button>
                  </div>
                  <p className="bg-icons p-3 text-2xl rounded-sm">
                    {product.eye}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {showPagination && (
            <div className="flex justify-center items-center mt-16 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 border-2 px-2 border-smallHeader rounded-full hover:bg-gray-200"
              >
                <IoMdArrowBack className="text-xl text-smallHeader" />
              </button>
              {/* Render pagination buttons dynamically */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 border rounded-full ${
                      currentPage === page
                        ? "bg-smallHeader text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="w-10 h-10 border-2 px-2 border-smallHeader rounded-full hover:bg-gray-200"
              >
                <IoMdArrowForward className="text-xl text-smallHeader" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
