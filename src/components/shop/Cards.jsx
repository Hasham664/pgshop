import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { setSearchText, applyFilters } from "../../redux/slices/filterSlice";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [maxVisiblePages, setMaxVisiblePages] = useState(6);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredProducts, searchText } = useSelector(
    (state) => state.filters
  );

  // Adjust visible pages based on screen size
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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
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
    <div className="Mycontainer flex gap-4 justify-between pt-16">
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
            <select className="border-2 border2 p-3">
              <option value="">Most Popular</option>
            </select>
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
                    handleAddToCart(product.id);
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

        <div className="flex justify-center items-center mt-16 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 border-2 px-2 border-smallHeader rounded-full hover:bg-gray-200"
          >
            <IoMdArrowBack className="text-xl text-smallHeader" />
          </button>
          {visiblePages.map((page) => (
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
          ))}
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
      </div>
    </div>
  );
};

export default Cards;
